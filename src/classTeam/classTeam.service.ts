import { Injectable } from '@nestjs/common';
import { getPagination, statusTypes } from '../helpers';
import { PrismaService } from '../prisma/prisma.service';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { AddClassTeamDto, GetAllClassTeamDto, UpdateClassTeamDto } from './dto';

@Injectable()
export class ClassTeamService {
  constructor(private prisma: PrismaService) {}

  private async isExistingClassTeam(dto: AddClassTeamDto) {
    const classTeam = await this.prisma.classTeam.findFirst({
      where: {
        name: dto.name,
        classId: dto.classId,
        schoolYearId: dto.schoolYearId,
        status: {
          code: statusTypes.ACTIVE,
        },
      },
    });

    if (classTeam?.id) {
      throw new ForbiddenException({
        code: 'duplicated-classteam',
      });
    }
  }

  async add(dto: AddClassTeamDto) {
    await this.isExistingClassTeam(dto);

    try {
      const classTeam = await this.prisma.classTeam.create({
        data: {
          name: dto.name,
          period: dto.period,
          classId: dto.classId,
          classroomId: dto.classroomId,
          courseId: dto.courseId,
          schoolYearId: dto.schoolYearId,
          statusId: dto.statusId,
        },
      });

      return classTeam;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async update(dto: UpdateClassTeamDto) {
    await this.isExistingClassTeam(dto);

    try {
      const classTeam = await this.prisma.classTeam.update({
        where: {
          id: dto.id,
        },
        data: {
          name: dto.name,
          period: dto.period,
          classId: dto.classId,
          classroomId: dto.classroomId,
          courseId: dto.courseId,
          schoolYearId: dto.schoolYearId,
          statusId: dto.statusId,
        },
      });

      return classTeam;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  private async getAllFilter(filter: GetAllClassTeamDto) {
    let where: any = {
      //Get current year class room
      schoolYear: {
        status: {
          code: statusTypes.ACTIVE,
        },
      },
      NOT: {
        status: {
          code: statusTypes.DELETED,
        },
      },
    };

    const { name } = filter;

    if (name)
      where = {
        AND: {
          name: { mode: 'insensitive', contains: name },
        },
      };

    return { where };
  }

  async getAll(filter: GetAllClassTeamDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = await this.getAllFilter(filter);

    const total = await this.prisma.classTeam.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const classTeams = await this.prisma.classTeam.findMany({
      skip,
      take,
      where,
      include: {
        status: true,
        class: true,
        classroom: true,
        course: true,
        schoolYear: true,
      },
    });

    return {
      page,
      total,
      totalPage,
      classTeams,
    };
  }

  async remove(id: number) {
    try {
      const deletedStatus = await this.prisma.status.findUnique({
        where: {
          code: statusTypes.DELETED,
        },
      });

      const responseActiveMatriculation =
        await this.prisma.registration.findFirst({
          where: {
            classTeamId: id,
            status: {
              code: statusTypes.ACTIVE,
            },
          },
        });

      if (responseActiveMatriculation) {
        throw new ForbiddenException({
          error: 'has-active-students',
          status: false,
        });
      }

      const classTeam = await this.prisma.classTeam.update({
        where: {
          id,
        },
        data: {
          statusId: deletedStatus.id,
        },
      });

      return classTeam;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getOne(id: number) {
    const reponse = await this.prisma.classTeam.findUnique({
      where: {
        id,
      },
      include: {
        status: true,
        class: true,
        classroom: true,
        course: true,
        schoolYear: true,
      },
    });

    return reponse;
  }
}
