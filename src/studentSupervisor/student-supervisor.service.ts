import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddStudentSupervisorDto } from './dto/addStudentSupervisorDto';
import { UpdateStudentSupervisorDto } from './dto/updateStudentSupervisorDto';
import { GetAllStudentSupervisorDto } from './dto/get-all.student-supervisor.request.dto';
import { getPagination, statusTypes } from '../helpers';

@Injectable()
export class StudentSupervisorService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddStudentSupervisorDto) {
    try {
      const studentSupervisor = await this.prisma.studentSupervisor.create({
        data: dto,
      });

      return studentSupervisor;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getAll(dto: GetAllStudentSupervisorDto) {
    const { page = 1, size = 10 } = dto;
    const { where } = await this.getAllFilter(dto);

    const total = await this.prisma.studentSupervisor.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const requests = await this.prisma.studentSupervisor.findMany({
      skip,
      take,
      where,
      include: {
        status: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    return {
      page,
      total,
      requests,
      totalPage,
    };
  }

  private async getAllFilter(dto: GetAllStudentSupervisorDto) {
    let where: any = {
      status: {
        code: {
          notIn: [statusTypes.DELETED],
        },
      },
    };

    const { name } = dto;

    if (name)
      where = {
        name: { mode: 'insensitive', contains: name },
      };

    return { where };
  }

  getByStudentSupervisorId(StudentSupervisorId: number) {
    return this.prisma.studentSupervisor.findMany({
      where: {
        id: StudentSupervisorId,
      },
    });
  }

  async update(dto: UpdateStudentSupervisorDto) {
    const { id, ...data } = dto;

    try {
      const response = await this.prisma.studentSupervisor.update({
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
    const response = await this.prisma.studentSupervisor.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
