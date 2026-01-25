import { PrismaService } from './../../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';

import { getPagination, statusTypes } from './../../helpers';
import { GetAllDocumentCategoryDto } from '../category/dto';
import { AddDocumentTypeDto } from './dto/add.document.type.dto';
import { UpdateDocumentTypeDto } from './dto/update.document.type.dto';
import { GetAllDocumentTypeDto } from './dto/get-all.document.type.dto';

@Injectable()
export class DocumentTypeService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddDocumentTypeDto) {
    const response = await this.prisma.documentType.create({
      data: {
        name: dto.name,
        price: dto.price,
        statusId: dto.statusId,
        documentCategoryId: dto.categoryId,
      },
    });

    return response;
  }

  async update(dto: UpdateDocumentTypeDto) {
    const response = await this.prisma.documentType.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
        price: dto.price,
        statusId: dto.statusId,
        documentCategoryId: dto.categoryId,
      },
    });

    return response;
  }

  async getAllSelect() {
    const types = await this.prisma.documentType.findMany({
      include: {
        status: true,
        document: true,
      },
    });

    return types;
  }

  async getAll(dto: GetAllDocumentTypeDto) {
    const { page = 1, size = 10 } = dto;
    const { where } = await this.getAllFilter(dto);

    const total = await this.prisma.documentType.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const types = await this.prisma.documentType.findMany({
      skip,
      take,
      where,
      include: {
        status: true,
        document: true,
      },
    });

    return {
      page,
      total,
      types,
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
        OR: [
          {
            name: { mode: 'insensitive', contains: name },
          },
          {
            document: {
              name: {
                mode: 'insensitive',
                contains: name,
              },
            },
          },
        ],
      };

    return { where };
  }

  async remove(id: number) {
    try {
      const student = await this.prisma.documentType.update({
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
}
