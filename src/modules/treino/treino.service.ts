import { Injectable } from '@nestjs/common';
import { CreateTreinoDto } from './dto/createTreino.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllTreinoDto } from './dto/getAllTreino.dto';
import { getPagination } from 'src/helpers/functions';

@Injectable()
export class TreinoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTreinoDto) {
    const response = await this.prisma.treino.create({
      data: dto,
    });

    return response;
  }

  async findAll(filter: GetAllTreinoDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.treino.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const treinos = await this.prisma.treino.findMany({
      include: { equipa: true },
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
      treinos,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllTreinoDto) {
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

  async update(id: number, dto: CreateTreinoDto) {
    const response = await this.prisma.treino.update({
      data: dto,
      where: {
        id,
      },
    });

    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.treino.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
