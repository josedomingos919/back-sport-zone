import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddPricesDto, UpdatePricesDto } from './dto';
import { GetPriceDto } from './dto/getPriceDto';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async isExistingPrice(dto: AddPricesDto) {
    const where: any = {
      classId: dto.classId,
      schoolYearId: dto.schoolYearId,
    };

    if (dto?.courseId) {
      where.courseId = dto.courseId;
    }

    const price = await this.prisma.registrationPrice.findFirst({
      where,
    });

    return price?.id > 0;
  }

  async update(dto: UpdatePricesDto) {
    if (dto?.examePrice) dto.examePrice = Number(dto.examePrice);

    try {
      const price = await this.prisma.registrationPrice.update({
        where: {
          id: dto.id,
        },
        data: dto,
      });

      return price;
    } catch (error) {
      throw new ForbiddenException({
        status: false,
        error,
      });
    }
  }

  async add(dto: AddPricesDto) {
    if (dto?.examePrice) dto.examePrice = Number(dto.examePrice);

    const isExisting = await this.isExistingPrice(dto);

    if (isExisting) {
      throw new ForbiddenException({
        status: false,
        error: 'existing',
        isExisting,
      });
    }

    if (!dto?.courseId) delete dto.courseId;

    try {
      const price = await this.prisma.registrationPrice.create({
        data: dto,
      });

      return price;
    } catch (error) {
      throw new ForbiddenException({
        status: false,
        error,
      });
    }
  }

  async getAll(schoolYearId: number) {
    try {
      const prices = await this.prisma.registrationPrice.findMany({
        include: {
          class: true,
          course: true,
          schoolYear: true,
        },
        where: {
          schoolYearId,
        },
      });

      return prices;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async remove(id: number) {
    const response = await this.prisma.registrationPrice.delete({
      where: {
        id,
      },
    });

    return response;
  }

  async getPrice(query: GetPriceDto) {
    const response = await this.prisma.registrationPrice.findFirst({
      include: {
        class: true,
        course: true,
        schoolYear: true,
      },
      where: {
        schoolYearId: query.schoolYearId,
        classId: query.classId,
        courseId: query.courseId,
      },
    });

    return response;
  }
}
