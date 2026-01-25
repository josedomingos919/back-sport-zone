import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  getAllStatus() {
    return this.prisma.status.findMany({
      where: {
        show: true,
      },
    });
  }
}
