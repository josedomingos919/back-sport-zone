import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoutryService {
  constructor(private prisma: PrismaService) {}

  getAllCoutry() {
    return this.prisma.country.findMany();
  }
}
