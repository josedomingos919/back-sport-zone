import { Injectable, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetPropinaDto } from './dto/getPropinaDto';
import { statusTypes } from '../helpers';
import { GetStudentsDto } from './dto/getStudentsDto';

@Injectable()
export class PropinaService {
  constructor(private prisma: PrismaService) {}

  async getClassTeam(dto: GetPropinaDto) {
    const where = {};

    if (dto.courseId) where['courseId'] = dto.courseId;

    const response = await this.prisma.classTeam.findMany({
      where: {
        ...where,
        schoolYear: {
          id: dto.schoolYearId,
        },
        classId: dto.classId,
        status: {
          code: statusTypes.ACTIVE,
        },
      },
    });

    return response.map((item) => {
      return {
        ...item,
        value: item.id,
        label: item.name,
      };
    });
  }

  async getStudents(@Query() dto: GetStudentsDto) {
    const months = await this.prisma.months.findMany({
      where: {
        schoolYear: {
          id: dto.schoolYearId,
        },
      },
      orderBy: {
        initialDate: 'asc',
      },
    });

    const students = await this.prisma.student.findMany({
      where: {
        registration: {
          some: {
            classTeamId: dto.classTeamId,
            status: {
              code: statusTypes.ACTIVE,
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
        registration: {
          where: {
            classTeamId: dto.classTeamId,
            status: {
              code: statusTypes.ACTIVE,
            },
          },
          select: {
            payment: {
              select: {
                SchoolFees: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return {
      months,
      students,
    };
  }
}
