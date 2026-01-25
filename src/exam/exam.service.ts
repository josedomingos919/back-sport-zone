/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddExamDto, UpdateExamDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExamService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddExamDto) {
    try {
      const exam = await this.prisma.exam.create({
        data: dto,
      });

      return exam;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async update(dto: UpdateExamDto) {
    try {
      const exam = await this.prisma.exam.update({
        where: {
          id: dto.id,
        },
        data: dto,
      });

      return exam;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
