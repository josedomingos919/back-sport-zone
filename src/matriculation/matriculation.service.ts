import { GetClassTeamDto } from './dto';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddMatriculationDto } from './dto/addMatriculationDto';
import { UpdateMatriculationDto } from './dto/updateMatriculationDto';
import { GetAllMatriculationDto } from './dto/getAllMatriculationDto';
import { getPagination, statusTypes } from '../helpers';
import { PaymentCodeType } from 'src/helpers/consts/paymentCodeType';

@Injectable()
export class MatriculationService {
  constructor(private prisma: PrismaService) {}

  async getClassTeam(dto: GetClassTeamDto) {
    const where = {
      status: {
        code: statusTypes.ACTIVE,
      },
      classId: dto.classId,
      schoolYear: {
        id: dto.schoolYearId,
      },
    };

    if (dto?.courseId) {
      where['courseId'] = dto?.courseId;
    }

    const response = await this.prisma.classTeam.findMany({
      where,
      include: {
        Registration: {
          where: {
            status: {
              code: statusTypes.ACTIVE,
            },
          },
        },
        classroom: true,
        class: {
          include: {
            registrationPrice: {
              where: {
                schoolYear: {
                  status: {
                    code: statusTypes.ACTIVE,
                  },
                },
              },
            },
          },
        },
      },
    });

    return response;
  }

  async add(dto: AddMatriculationDto) {
    const year = await this.prisma.schoolYear.findUnique({
      where: {
        id: dto.schoolYearId,
      },
    });

    if (!year)
      throw new ForbiddenException({
        error: 'year_not_found',
        status: false,
      });

    try {
      const matriculation = await this.prisma.registration.create({
        data: {
          cardPrice: dto.cardPrice,
          classTeamId: dto.classteamId,
          schoolYearId: year?.id,
          studentId: dto.studentId,
          statusId: dto.statusId,
          courseId: dto.courseId || null,
          classId: dto.classId,
          price: dto.price,
          type: dto.type,
          employeeId: dto.employeeId,
        },
        include: {
          class: true,
          status: true,
          employee: true,
          course: true,
          student: {
            include: {
              province: true,
              country: true,
            },
          },
          classTeam: {
            include: {
              class: {
                include: {
                  registrationPrice: true,
                },
              },
            },
          },
          SchoolYear: true,
        },
      });

      return matriculation;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async checkStudentActiveMatriculation(dto: UpdateMatriculationDto) {
    const passedStatus = await this.prisma.status.findFirst({
      where: {
        id: dto.statusId,
      },
    });

    if (passedStatus?.code == statusTypes.ACTIVE) {
      const studentActiveMatriculation =
        await this.prisma.registration.findFirst({
          where: {
            studentId: dto.studentId,
            status: {
              code: statusTypes.ACTIVE,
            },
          },
        });

      if (
        studentActiveMatriculation?.id &&
        studentActiveMatriculation?.id != dto?.id
      ) {
        throw new ForbiddenException({
          status: false,
          error: 'try_active_more_then_one_matriculation',
        });
      }
    }
  }

  async update(dto: UpdateMatriculationDto) {
    try {
      await this.checkStudentActiveMatriculation(dto);

      const matriculation = await this.prisma.registration.update({
        where: {
          id: dto.id,
        },
        data: {
          statusId: dto.statusId,
        },
      });

      return matriculation;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async remove(id: number) {
    const response = this.prisma.registration.delete({ where: { id } });

    return response;
  }

  //Estou comentando
  private getAllMatriculationFilter(filter: GetAllMatriculationDto) {
    const { name, schoolYearId } = filter;

    const where = {
      schoolYearId,
      NOT: {
        status: {
          code: 'ELIM',
        },
      },
    };

    if (name) {
      const OR: any = [
        {
          student: {
            name: {
              mode: 'insensitive',
              contains: name,
            },
          },
        },
        {
          student: {
            bi: {
              mode: 'insensitive',
              contains: name,
            },
          },
        },
      ];

      const nameInNumber = Number(name);

      if (nameInNumber >= 0)
        OR.push({
          student: {
            id: {
              equals: nameInNumber,
            },
          },
        });

      where['OR'] = OR;
    }

    return { where };
  }

  async getAllMatriculation(filter: GetAllMatriculationDto) {
    const { page = 1, size = 10, schoolYearId = 0 } = filter;
    const { where } = this.getAllMatriculationFilter(filter);

    const total = await this.prisma.registration.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const matriculation = await this.prisma.registration.findMany({
      skip,
      take,
      where,
      include: {
        class: true,
        employee: true,
        status: true,
        course: true,
        student: {
          include: {
            province: true,
            country: true,
            DiscountsInUse: true,
            studentSupervisor: true,
          },
        },
        MedicalRecord: true,
        classTeam: {
          include: {
            class: {
              include: {
                registrationPrice: true,
              },
            },
          },
        },
        SchoolYear: true,
        payment: {
          where: {
            type: PaymentCodeType?.MatriculationRematriculation,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });

    return {
      page,
      total,
      totalPage,
      matriculation,
    };
  }
}
