import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddSchoolFeesDto } from './dto';

@Injectable()
export class SchoolFeesService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddSchoolFeesDto) {
    try {
      const response = await this.prisma.schoolFees.create({
        data: dto,
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
