import { Product } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getByCode(code: string): Promise<Product> {
    const response = await this.prisma.product.findFirst({
      where: {
        code,
      },
    });

    return response;
  }
}
