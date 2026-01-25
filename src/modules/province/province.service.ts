import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProvinceDto } from './dto/CreateProvinceDto';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}

  async getAllProvince() {
    const response = await this.prisma.provincia.findMany();

    return response;
  }

  async createProvince(dto: CreateProvinceDto) {
    const response = await this.prisma.provincia.create({
      data: {
        name: dto.name,
      },
    });

    return response;
  }

  async updateProvince(id: number, dto: CreateProvinceDto) {
    const response = await this.prisma.provincia.update({
      data: {
        name: dto.name,
      },
      where: {
        id,
      },
    });

    return response;
  }

  async deleteProvince(id: number) {
    const response = await this.prisma.provincia.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
