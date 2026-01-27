import { Injectable } from '@nestjs/common';
import { CreateEquipaDto } from './dto/createEquipa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllEquipaDto } from './dto/getAllEquipa.dto';
import { getPagination } from 'src/helpers/functions';

@Injectable()
export class EquipaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEquipaDto) {
    const response = await this.prisma.equipa.create({
      data: {
        nome: dto.nome,
        escalao: dto.escalao,
        clubeId: dto.clubeId,
        categoria: dto.categoria,
        treinadorId: dto.treinadorId,
      },
    });

    return response;
  }

  async findAll(filter: GetAllEquipaDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.equipa.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const equipas = await this.prisma.equipa.findMany({
      include: { clube: true, treinador: true },
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
      equipas,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllEquipaDto) {
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

  async update(id: number, dto: CreateEquipaDto) {
    const response = await this.prisma.equipa.update({
      data: dto,
      where: {
        id,
      },
    });

    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.equipa.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
