import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddClassroomDto, UpdateClassroomDto } from './dto';
import { statusTypes } from '../helpers';

@Injectable()
export class ClassroomService {
  constructor(private prisma: PrismaService) {}

  async addClassromm(dto: AddClassroomDto) {
    try {
      const classroom = await this.prisma.classroom.create({
        data: dto,
      });

      return classroom;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async updateClassroom(dto: UpdateClassroomDto) {
    try {
      const classroom = await this.prisma.classroom.update({
        where: {
          id: dto.id,
        },
        data: dto,
      });

      return classroom;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getAvaliable(period: string) {
    try {
      const classrooms = await this.prisma.classroom.findMany({
        where: {
          NOT: {
            ClassTeam: {
              some: {
                status: {
                  code: statusTypes.ACTIVE,
                },
                schoolYear: {
                  status: {
                    code: statusTypes.ACTIVE,
                  },
                },
                period,
              },
            },
          },
        },
        orderBy: {
          id: 'asc',
        },
      });

      return classrooms;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getAllClassroom() {
    try {
      const classrooms = await this.prisma.classroom.findMany({
        orderBy: {
          id: 'asc',
        },
      });

      return classrooms;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async removeClassroom(id: number) {
    const response = this.prisma.classroom.delete({ where: { id } });

    return response;
  }
}
