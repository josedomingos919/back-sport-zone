import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddClassTeamTeacherDto, UpdateClassTeamTeacherDto } from './dto';
import { GetAvaliabledDisciplinesDto } from './dto/getAvaliabledDisciplinesDto';

@Injectable()
export class ClassTeamsTeacherService {
  constructor(private prisma: PrismaService) {}

  async get(classTeamId: number) {
    const response = await this.prisma.classTeamTeacher.findMany({
      where: {
        classTeamId,
      },
      include: {
        teacher: {
          include: {
            employee: {
              select: {
                id: true,
                bi: true,
                name: true,
              },
            },
          },
        },
        discipline: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
        classTeam: {
          include: {
            schoolYear: {
              select: {
                id: true,
                year: true,
              },
            },
            class: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return response;
  }

  async add(data: AddClassTeamTeacherDto) {
    try {
      const response = await this.prisma.classTeamTeacher.create({
        data: {
          teacherId: data.teacherId,
          classTeamId: data.classTeamId,
          disciplineId: data.disciplineId,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
      });
    }
  }

  async update(data: UpdateClassTeamTeacherDto) {
    try {
      const response = await this.prisma.classTeamTeacher.update({
        data: {
          teacherId: data.teacherId,
          classTeamId: data.classTeamId,
          disciplineId: data.disciplineId,
        },
        where: {
          id: data.id,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
      });
    }
  }

  async remove(id: number) {
    const response = await this.prisma.classTeamTeacher.delete({
      where: {
        id,
      },
    });

    return response;
  }

  async getAvaliabledDisciplines(data: GetAvaliabledDisciplinesDto) {
    if (!data.classTeamId)
      throw new ForbiddenException({ error: 'classTeamId-null' });

    const classTeam = await this.prisma.classTeam.findUnique({
      where: {
        id: data.classTeamId,
      },
    });

    if (!classTeam)
      throw new ForbiddenException({ error: 'classTeamId-not-found' });

    try {
      const response = await this.prisma.discipline.findMany({
        where: {
          classTeamTeacher: {
            none: {
              classTeamId: data.classTeamId,
            },
          },
          CurriculumGrid: {
            some: {
              classId: classTeam?.classId,
              courseId: classTeam?.courseId || null,
            },
          },
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({ error });
    }
  }

  async search(keyword: string) {
    try {
      if (!keyword) throw new ForbiddenException({ error: 'empty-keyword' });

      const response = await this.prisma.teacher.findMany({
        select: {
          id: true,
          employee: true,
        },
        where: {
          employee: {
            name: {
              mode: 'insensitive',
              contains: keyword,
            },
          },
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({ error });
    }
  }
}
