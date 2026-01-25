import { Injectable } from '@nestjs/common';
import { AddCurriculumGridDto, GetCurriculumGridDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CurriculumGridService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddCurriculumGridDto) {
    const response = await this.prisma.curriculumGrid.createMany({
      data: dto.disciplines.map((disciplineId) => ({
        classId: dto.classId,
        courseId: dto.courseId ?? null,
        disciplineId,
      })),
    });

    return response;
  }

  async getAll(dto: GetCurriculumGridDto) {
    const response = await this.prisma.curriculumGrid.findMany({
      include: {
        class: true,
        course: true,
        discipline: true,
      },
      where: {
        classId: dto.classId,
        courseId: dto.courseId ?? null,
      },
    });

    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.curriculumGrid.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
