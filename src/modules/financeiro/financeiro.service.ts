import { Injectable } from '@nestjs/common';
import { getPagination } from 'src/helpers/functions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovimentoDto } from './dto/CreateMovimentoDto';
import { GetAllMovimentosDto } from './dto/GetAllMovimentosDto';

import * as XLSX from 'xlsx';

@Injectable()
export class FinanceiroService {
  constructor(private prisma: PrismaService) {}

  async exportToExcel(dataInicio: Date, dataFim: Date): Promise<Buffer> {
    const movimentos = await this.prisma.movimentos.findMany({
      where: {
        data: {
          gte: dataInicio,
          lte: dataFim,
        },
      },
      orderBy: {
        data: 'asc',
      },
    });

    const sheetData = movimentos.map((m) => ({
      ID: m.id,
      Data: m.data.toISOString().split('T')[0],
      Tipo: m.tipo,
      Descrição: m.descricao,
      Valor: Number(m.valor),
    }));

    const worksheet = XLSX.utils.json_to_sheet(sheetData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Movimentos');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'buffer',
    });

    return excelBuffer;
  }

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
