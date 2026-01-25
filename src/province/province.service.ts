import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.province.findMany();
  }

  getByCountryId(countryId: number) {
    return this.prisma.province.findMany({
      where: {
        countryId,
      },
    });
  }
}
