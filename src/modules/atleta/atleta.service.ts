import { Injectable } from '@nestjs/common';
import { CreateAtletaDto } from './dto/createAtleta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { getPagination } from 'src/helpers/functions';
import { GetAllAtletasDto } from './dto/getAllAtleta.dto';

@Injectable()
export class AtletaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAtletaDto) {
    const response = await this.prisma.atleta.create({
      data: dto,
    });

    return response;
  }

  async findAll(filter: GetAllAtletasDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.atleta.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const clubes = await this.prisma.atleta.findMany({
      include: { equipe: true, user: true },
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
      clubes,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllAtletasDto) {
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

  async update(id: number, dto: CreateAtletaDto) {
    const response = await this.prisma.atleta.update({
      data: dto,
      where: {
        id,
      },
    });

    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.clube.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
