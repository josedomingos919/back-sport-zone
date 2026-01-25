import { GetAllUserDTO } from './dto';
import { getPagination } from 'src/helpers/functions';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll(filter: GetAllUserDTO) {
    const { page = 1, size = 10 } = filter;
    const { where } = this.getAllFilter(filter);

    const total = await this.prisma.user.count({
      where,
    });

    const { skip, take, totalPage } = getPagination({ page, size, total });

    const users = await this.prisma.user.findMany({
      skip,
      take,
      where,
      orderBy: [{}],
    });

    return {
      page,
      users,
      total,
      totalPage,
    };
  }

  private getAllFilter(filter: GetAllUserDTO) {
    const where = {
      NOT: {},
    };

    const { name } = filter;

    if (name)
      where['employee'] = {
        name: {
          mode: 'insensitive',
          contains: name,
        },
      };

    return { where };
  }

  async search(keword: string) {
    try {
      const users = await this.prisma.user.findMany({
        where: {},
      });

      return users;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
