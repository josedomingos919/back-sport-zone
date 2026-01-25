import { ForbiddenException, Injectable } from '@nestjs/common';
import { getPagination, statusID, statusTypes } from '../helpers';
import { PrismaService } from '../prisma/prisma.service';
import { AddPaymentDto } from './dto/addPaymentDto';
import { CartDto } from './dto/cartDto';
import { PaymentCodeType } from '../helpers/consts/paymentCodeType';
import { GetPaymentDto } from './dto/getPaymentDto';
import { PaymentMethodDto } from './dto/paymentMethod';
import { PaymentMethodTypes } from '../helpers/consts/paymentMethodsType';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async searchStudent(search: string) {
    const response = await this.prisma.student.findMany({
      where: {
        OR: [
          { name: { mode: 'insensitive', contains: search } },
          { bi: { mode: 'insensitive', contains: search } },
        ],
      },
      include: {
        registration: {
          include: {
            SchoolYear: {
              include: {
                status: true,
              },
            },
            payment: {
              include: {
                Exam: true,
                status: true,
                SchoolFees: {
                  include: {
                    month: true,
                  },
                },
                SchoolResource: {
                  include: {
                    discipline: true,
                  },
                },
              },
            },
            class: true,
            course: true,
            classTeam: true,
          },
          where: {
            status: {
              code: statusTypes.ACTIVE,
            },
            // SchoolYear: {
            //   status: {
            //     code: statusTypes.ACTIVE,
            //   },
            // },
          },
        },
      },
    });

    return response;
  }

  getInvoiceNumber({ id, date }) {
    const invoiceYear = `${new Date(date).getFullYear()}`;
    const zeroNumber = '000000'.substring(0, 6 - `${id}`.length);

    return `${invoiceYear}${zeroNumber}${id}`;
  }

  async addPaymentMethod(invoiceId: number, data: PaymentMethodDto) {
    let transferData = {};

    if (data?.paymentMethodId == PaymentMethodTypes.TRANSFERENCIA_BANCARIA) {
      transferData = {
        ibanRemitent: data.ibanRemitent,
        bankAccountId: data.bankAccountId,
        transactionNumber: data.transactionNumber,
        date: new Date(data.date).toISOString(),
      };
    }

    await this.prisma.paymentMethods.create({
      data: {
        invoiceId,
        value: data.value,
        paymentMethodId: data.paymentMethodId,
        ...transferData,
      },
    });
  }

  async validateAllPaymentMethods(methods: PaymentMethodDto[]) {
    for (const {
      date,
      value,
      ibanRemitent,
      bankAccountId,
      paymentMethodId,
      transactionNumber,
    } of methods) {
      if (paymentMethodId == PaymentMethodTypes.DINHEIRO && !value) {
        throw new ForbiddenException({
          error: 'erro-payment-method-dinheiro-value',
          message: 'Verificar o valor do método de pagamento dinheiro!',
        });
      }

      if (paymentMethodId == PaymentMethodTypes.TPA && !value) {
        throw new ForbiddenException({
          error: 'erro-payment-method-tpa-value',
          message: 'Verificar o valor do método de pagamento TPA!',
        });
      }

      if (paymentMethodId == PaymentMethodTypes.TRANSFERENCIA_BANCARIA) {
        if (!value) {
          throw new ForbiddenException({
            error: 'erro-payment-method-tranferencia-value',
            message: 'Verificar o valor do método de pagamento Transferência!',
          });
        }

        if (!date) {
          throw new ForbiddenException({
            error: 'erro-payment-method-data-value',
            message:
              'Verificar o campo data do método de pagamento tranferencia!',
          });
        }

        if (!ibanRemitent) {
          throw new ForbiddenException({
            error: 'erro-payment-method-ibanRemitent-value',
            message:
              'Verificar o campo ibanRemitent do método de pagamento tranferencia!',
          });
        }

        if (!transactionNumber) {
          throw new ForbiddenException({
            error: 'erro-payment-method-transactionNumber',
            message:
              'Verificar o campo transactionNumber do método de pagamento tranferencia!',
          });
        }

        if (!bankAccountId) {
          throw new ForbiddenException({
            error: 'erro-payment-method-bankAccountId',
            message:
              'Verificar o campo bankAccountId do método de pagamento tranferencia!',
          });
        }
      }

      if (paymentMethodId == PaymentMethodTypes.SALDO_DA_CONTA && !value) {
        throw new ForbiddenException({
          error: 'erro-payment-method-saldo-da-conta-value',
          message: 'Verificar o valor do método de pagamento Sáldo da conta!',
        });
      }
    }
  }

  async addPayment(dto: AddPaymentDto) {
    await this.validateAllPaymentMethods(dto.paymentMethod);

    const invoice = await this.prisma.invoice.create({
      data: {
        number: '',
        total: dto.total,
        descontoSaldo: dto.descontoSaldo,
        subTotal: dto.subTotal,
        troco: dto.troco,
        valorDado: dto.valorDado,
        registrationId: dto.registrationId,
        statusId: statusID.ACTIVE,
        employeeId: dto.employeeId,
      },
    });

    if (!invoice?.id)
      throw new ForbiddenException({
        message: 'Falha ao criar a fatura',
        error: 'invoice-not-created',
      });

    // save payment method
    for (const method of dto.paymentMethod) {
      await this.addPaymentMethod(invoice?.id, method);
    }

    // set invoice number
    await this.prisma.invoice.update({
      data: {
        number: this.getInvoiceNumber({
          id: invoice.id,
          date: invoice.createdAt,
        }),
      },
      where: {
        id: invoice.id,
      },
    });

    // register invoice payment
    for (const payment of dto.cart) {
      await this.addInvoicePayment(
        payment,
        statusID.ACTIVE,
        invoice.id,
        dto.employeeId,
        dto.registrationId,
      );
    }

    await this.prisma.student.update({
      where: {
        id: dto.studentId,
      },
      data: {
        balance: dto.balance - dto.descontoSaldo + dto.troco,
      },
    });

    // payment
    const payment = await this.prisma.invoice.findFirst({
      where: {
        id: invoice?.id,
      },
      include: {
        Payment: {
          include: {
            Exam: true,
            status: true,
            SchoolFees: {
              include: {
                month: true,
              },
            },
            SchoolResource: {
              include: {
                discipline: true,
              },
            },
          },
        },
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
        registration: {
          include: {
            status: true,
            student: true,
            class: true,
            course: true,
          },
        },
        status: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return payment;
  }

  async addInvoicePayment(
    payment: CartDto,
    statusId: number,
    invoiceId: number,
    employeeId: number,
    registrationId: number,
  ) {
    const paymentResponse = await this.prisma.payment.create({
      data: {
        statusId,
        invoiceId,
        employeeId,
        registrationId,
        type: payment.type,
        value: payment.value,
        multa: payment.multa,
        total: payment.total,
        reference: payment.reference,
      },
    });

    // add extra data
    if (payment.type == PaymentCodeType.Propina) {
      await this.prisma.schoolFees.create({
        data: {
          monthsId: payment.monthsId,
          schoolFine: payment.hasMulta,
          paymentId: paymentResponse.id,
        },
      });
    } else if (payment.type == PaymentCodeType.Recurso) {
      await this.prisma.schoolResource.create({
        data: {
          disciplineId: payment.disciplineId,
          paymentId: paymentResponse.id,
        },
      });
    } else if (payment.type == PaymentCodeType.ExameEspecial) {
      await this.prisma.exam.create({
        data: {
          disciplineId: payment.disciplineId,
          paymentId: paymentResponse.id,
        },
      });
    } else if (payment.type == PaymentCodeType.Solicitacoes) {
      await this.prisma.documentRequestPayments.create({
        data: {
          paymentId: paymentResponse.id,
          documentRequestId: payment?.documentRequestId,
        },
      });
    } else if (payment.type == PaymentCodeType.MatriculationRematriculation) {
      //Por enquanto não faz nada
    }

    return paymentResponse;
  }

  //Estou comentando
  private getAllPaymentFilter(filter: GetPaymentDto) {
    const where = {
      NOT: {
        status: {
          code: statusTypes.DELETED,
        },
      },
      registration: {
        status: {
          code: statusTypes.ACTIVE,
        },
        SchoolYear: {
          status: {
            code: statusTypes.ACTIVE,
          },
        },
      },
    };

    const { name } = filter;

    if (name) {
      const OR: any = [
        {
          registration: {
            student: {
              name: { mode: 'insensitive', contains: name },
            },
          },
        },
        {
          registration: {
            student: {
              bi: { mode: 'insensitive', contains: name },
            },
          },
        },
        {
          number: { mode: 'insensitive', contains: name },
        },
      ];

      const nameInNumber = Number(name);

      if (nameInNumber >= 0) {
        OR.push({
          id: {
            equals: nameInNumber,
          },
        });
      }

      where['OR'] = OR;
    }

    return { where };
  }

  async getAllPayment(filter: GetPaymentDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllPaymentFilter(filter);

    const total = await this.prisma.invoice.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const payment = await this.prisma.invoice.findMany({
      skip,
      take,
      where,
      include: {
        Payment: {
          include: {
            Exam: true,
            status: true,
            SchoolFees: {
              include: {
                month: true,
              },
            },
            SchoolResource: {
              include: {
                discipline: true,
              },
            },
          },
        },
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
        registration: {
          include: {
            status: true,
            student: true,
            class: true,
            course: true,
          },
        },
        status: true,
        PaymentMethods: {
          include: {
            bankAccount: true,
            paymentMethod: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });

    return {
      page,
      total,
      totalPage,
      payment,
    };
  }

  async cancelPayment(id: number) {
    // Get status
    const status = await this.prisma.status.findFirst({
      where: {
        code: statusTypes.ANNULLED,
      },
    });

    // Invoice
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id,
      },
      include: {
        status: true,
        registration: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!invoice)
      throw new ForbiddenException({
        error: 'invoice-not-found',
        status: false,
      });

    if (invoice?.status?.code == status?.code)
      throw new ForbiddenException({
        error: 'payment-already-cancelled',
        status: false,
      });

    // Calc balance
    const updatedBalance =
      invoice?.registration?.student?.balance -
      invoice?.troco +
      invoice?.descontoSaldo;

    // Updated Balance
    await this.prisma.student.update({
      where: {
        id: invoice?.registration?.student?.id,
      },
      data: {
        balance: updatedBalance,
      },
    });

    // Invalid invoice
    const responseInvoice = await this.prisma.invoice.update({
      where: {
        id,
      },
      data: {
        statusId: status.id,
      },
    });

    // Invalida payments
    const responsePayment = await this.prisma.payment.updateMany({
      where: {
        invoiceId: id,
      },
      data: {
        statusId: status.id,
      },
    });

    return {
      responseInvoice,
      responsePayment,
    };
  }

  async getAllMethods() {
    const response = await this.prisma.paymentMethod.findMany();

    return response;
  }

  async getAllBankAccount() {
    const response = await this.prisma.bankAccount.findMany();

    return response;
  }
}
