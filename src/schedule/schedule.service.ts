import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddScheduleDto } from './dto/addScheduleDto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateScheduleDto } from './dto/updateScheduleDto';

@Injectable()
export class ScheduleService {
  public constructor(private prisma: PrismaService) {}

  async add(dto: AddScheduleDto) {
    try {
      const response = await this.prisma.schedule.create({
        data: {
          endTime: new Date(`2024-01-01 ${dto.endTime}:00`).toISOString(),
          startTime: new Date(`2024-01-01 ${dto.startTime}:00`).toISOString(),
          weekDaysId: dto.weekDaysId,
          classTeamId: dto.classTeamId,
          disciplineId: dto.disciplineId,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
      });
    }
  }

  async update(dto: UpdateScheduleDto) {
    try {
      const response = await this.prisma.schedule.update({
        where: {
          id: dto.id,
        },
        data: {
          endTime: dto.endTime,
          startTime: dto.startTime,
          weekDaysId: dto.weekDaysId,
          classTeamId: dto.classTeamId,
          disciplineId: dto.disciplineId,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
      });
    }
  }

  async get(classTeamId: number) {
    try {
      const response = await this.prisma.weekDays.findMany({
        where: {
          id: {
            notIn: [1, 7],
          },
        },
        include: {
          Schedule: {
            include: {
              discipline: true,
            },
            where: {
              classTeamId,
            },
            orderBy: {
              startTime: 'asc',
            },
          },
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
    const response = await this.prisma.schedule.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
