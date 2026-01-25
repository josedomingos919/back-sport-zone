import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddDiscountsInUseDto } from './dto/addDiscountsInUseDto';
import { UpdateDiscountsInUseDto } from './dto/updateDiscountsInUseDto';

@Injectable()
export class DiscountsInUseService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddDiscountsInUseDto) {
    try {
      const discountsInUse = await this.prisma.discountsInUse.create({
        data: dto,
      });

      return discountsInUse;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  getAllStudentSupervisor() {
    return this.prisma.discountsInUse.findMany({
      include: {
        discount: true,
        status: true,
        studentSupervisor: true,
        studenty: true,
      },
    });
  }

  getByStudentSupervisorId(discountsInUseId: number) {
    return this.prisma.discountsInUse.findMany({
      where: {
        id: discountsInUseId,
      },
    });
  }

  async update(dto: UpdateDiscountsInUseDto) {
    const { id, ...data } = dto;

    try {
      const response = await this.prisma.discountsInUse.update({
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
    const response = await this.prisma.discountsInUse.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
