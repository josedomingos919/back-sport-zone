import { PrismaService } from './../../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';

import { getPagination, statusTypes } from './../../helpers';
import { GetAllDocumentCategoryDto } from '../category/dto';
import {
  AddDocumentRequestDto,
  GetAllDocumentRequestDto,
  UpdateDocumentRequestDto,
} from './dto';
import { GetNotPayedRequestsDto } from './dto/get-not-payed-requests.document.request.dto';

@Injectable()
export class DocumentRequestService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddDocumentRequestDto) {
    const response = await this.prisma.documentRequest.create({
      data: dto,
    });

    return response;
  }

  async update(dto: UpdateDocumentRequestDto) {
    const response = await this.prisma.documentRequest.update({
      where: {
        id: dto.id,
      },
      data: dto,
    });

    return response;
  }

  async getAll(dto: GetAllDocumentRequestDto) {
    const { page = 1, size = 10 } = dto;
    const { where } = await this.getAllFilter(dto);

    const total = await this.prisma.documentRequest.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const requests = await this.prisma.documentRequest.findMany({
      skip,
      take,
      where,
      include: {
        status: true,
        student: {
          include: {
            registration: {
              include: {
                SchoolYear: true,
              },
            },
          },
        },
        registration: {
          include: {
            SchoolYear: true,
          },
        },
        documentType: true,
        DocumentRequestPayments: {
          where: {
            payment: {
              status: {
                code: statusTypes.ACTIVE,
              },
            },
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
      requests,
      totalPage,
    };
  }

  private async getAllFilter(dto: GetAllDocumentCategoryDto) {
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
        student: {
          name: { mode: 'insensitive', contains: name },
        },
      };

    return { where };
  }

  async getNotPayedRequests(dto: GetNotPayedRequestsDto) {
    const requests = await this.prisma.documentRequest.findMany({
      where: {
        studentId: dto.studentId,
        registrationId: dto.registrationId,
        status: {
          code: statusTypes.PENDING,
        },
        DocumentRequestPayments: {
          none: {
            payment: {
              status: {
                code: statusTypes.ACTIVE,
              },
            },
          },
        },
      },
      include: {
        documentType: true,
      },
    });

    return requests;
  }

  async remove(id: number) {
    try {
      const student = await this.prisma.documentRequest.update({
        where: {
          id,
        },
        data: {
          status: {
            connect: {
              code: statusTypes.DELETED,
            },
          },
        },
      });

      return student;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async cancel(id: number) {
    try {
      const student = await this.prisma.documentRequest.update({
        where: {
          id,
        },
        data: {
          status: {
            connect: {
              code: statusTypes.ANNULLED,
            },
          },
        },
      });

      return student;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
