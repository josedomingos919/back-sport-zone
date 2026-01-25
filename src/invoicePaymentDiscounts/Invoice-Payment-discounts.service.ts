import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddInvoicePaymentDiscountsDto } from './dto/addInvoicePaymentDiscountsDto';
import { UpdateInvoicePaymentDiscountsDto } from './dto/updateInvoicePaymentDiscountsDto';

@Injectable()
export class InvoicePaymentDiscountsService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddInvoicePaymentDiscountsDto) {
    try {
      const studentSupervisor =
        await this.prisma.invoicePaymentDiscounts.create({
          data: dto,
        });

      return studentSupervisor;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  getAllStudentSupervisor() {
    return this.prisma.invoicePaymentDiscounts.findMany({
      include: {
        payment: true,
        paymentDiscount: true,
      },
    });
  }

  getByStudentSupervisorId(StudentSupervisorId: number) {
    return this.prisma.invoicePaymentDiscounts.findMany({
      where: {
        id: StudentSupervisorId,
      },
    });
  }

  async update(dto: UpdateInvoicePaymentDiscountsDto) {
    const { id, ...data } = dto;

    try {
      const response = await this.prisma.invoicePaymentDiscounts.update({
        where: {
          id,
        },
        data,
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async remove(id: number) {
    const response = await this.prisma.invoicePaymentDiscounts.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
