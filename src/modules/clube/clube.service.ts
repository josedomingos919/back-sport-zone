import { Injectable } from '@nestjs/common';
import { CreateClubeDto } from './dto/createClube.dto';
import { UpdateClubeDto } from './dto/updateClube.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllClubsDto } from './dto/getAllClubs.dto';
import { getPagination } from 'src/helpers/functions';

@Injectable()
export class ClubeService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClubeDto) {
    const response = await this.prisma.clube.create({
      data: dto,
    });

    return response;
  }

  async findAll(filter: GetAllClubsDto) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.clube.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const movimentos = await this.prisma.clube.findMany({
      include: { dirigente: true, province: true },
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

  private getAllFilter(filter: GetAllClubsDto) {
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

  async update(id: number, dto: UpdateClubeDto) {
    const response = await this.prisma.clube.update({
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
