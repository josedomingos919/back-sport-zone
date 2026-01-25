import { GetAllUserDTO } from './dto';
import { getPagination, statusTypes } from '../helpers';
import { PrismaService } from '../prisma/prisma.service';
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
      include: {
        employee: true,
        status: true,
      },
      orderBy: [
        {
          employee: {
            name: 'asc',
          },
        },
      ],
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
      NOT: {
        status: {
          code: statusTypes.DELETED,
        },
      },
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
        where: {
          employee: {
            name: {
              mode: 'insensitive',
              contains: keword,
            },
          },
        },
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
