import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddPaymentDiscountDto } from './dto/addPaymentDiscountDto';
import { UpdatePaymentDiscountDto } from './dto/updatePaymentDiscountDto';

@Injectable()
export class PaymentDiscountService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddPaymentDiscountDto) {
    try {
      const studentSupervisor = await this.prisma.paymentDiscount.create({
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
    return this.prisma.paymentDiscount.findMany({
      include: {
        DiscountsInUse: true,
        InvoicePaymentDiscounts: true,
        status: true,
      },
    });
  }

  getByStudentSupervisorId(StudentSupervisorId: number) {
    return this.prisma.paymentDiscount.findMany({
      where: {
        id: StudentSupervisorId,
      },
    });
  }

  async update(dto: UpdatePaymentDiscountDto) {
    const { id, ...data } = dto;

    try {
      const response = await this.prisma.paymentDiscount.update({
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
    const response = await this.prisma.paymentDiscount.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
