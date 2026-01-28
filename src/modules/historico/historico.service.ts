import { Injectable } from '@nestjs/common';
import { getPagination } from 'src/helpers/functions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHistoricoDto } from './dto/createHistorico.dto';
import { GetAllHistoricoDto } from './dto/getAllHistorico.dto';

@Injectable()
export class HistoricoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateHistoricoDto) {
    const response = await this.prisma.historicoAtleta.create({
      data: dto,
    });
    return response;
  }

  async findAll(filter: GetAllHistoricoDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.historicoAtleta.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const historicos = await this.prisma.historicoAtleta.findMany({
      include: {
        atleta: {
          include: {
            user: true,
          },
        },
        jogo: {
          include: {
            adversario: true,
            equipa: true,
          },
        },
      },
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
      total,
      historicos,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllHistoricoDto) {
    const where = {
      NOT: {},
    };

    const { name } = filter;

    if (name) where['name'] = name;

    return { where };
  }

  findOne(id: number) {
    return `This action returns a #${id} clube`;
  }

  async update(id: number, dto: CreateHistoricoDto) {
    const response = await this.prisma.historicoAtleta.update({
      data: dto,
      where: {
        id,
      },
    });
    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.historicoAtleta.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
