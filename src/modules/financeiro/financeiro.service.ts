import { Injectable } from '@nestjs/common';
import { getPagination } from 'src/helpers/functions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovimentoDto } from './dto/CreateMovimentoDto';
import { GetAllMovimentosDto } from './dto/GetAllMovimentosDto';

@Injectable()
export class FinanceiroService {
  constructor(private prisma: PrismaService) {}

  async getAllMovimento(filter: GetAllMovimentosDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.movimentos.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const movimentos = await this.prisma.movimentos.findMany({
      skip,
      take,
      where,
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });

    return {
      page,
      movimentos,
      total,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllMovimentosDto) {
    const where = {
      NOT: {},
    };

    const { descricao } = filter;

    if (descricao) where['descricao'] = descricao;

    return { where };
  }

  async createMovimento(dto: CreateMovimentoDto) {
    const response = await this.prisma.movimentos.create({
      data: dto,
    });

    return response;
  }

  async updateMovimento(id: number, dto: CreateMovimentoDto) {
    const response = await this.prisma.movimentos.update({
      data: dto,
      where: {
        id,
      },
    });

    return response;
  }

  async deleteMovimento(id: number) {
    const response = await this.prisma.movimentos.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
