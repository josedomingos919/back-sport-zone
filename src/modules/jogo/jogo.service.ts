import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { getPagination } from 'src/helpers/functions';
import { CreateJogoDto } from './dto/createJogo.dto';
import { GetAllJogoDto } from './dto/getAllJogo.dto';

@Injectable()
export class JogoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateJogoDto) {
    const response = await this.prisma.jogo.create({
      data: dto,
    });

    return response;
  }

  async findAll(filter: GetAllJogoDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.jogo.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const jogos = await this.prisma.jogo.findMany({
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
      jogos,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllJogoDto) {
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

  async update(id: number, dto: CreateJogoDto) {
    const response = await this.prisma.jogo.update({
      data: dto,
      where: {
        id,
      },
    });

    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.jogo.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
