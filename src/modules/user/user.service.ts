import { GetAllUserDTO } from './dto';
import { getPagination } from 'src/helpers/functions';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

import * as argon from 'argon2';
import { UserAccessType } from 'src/helpers/consts';

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
      orderBy: [
        {
          id: 'desc',
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

  async getAllDirigentes() {
    try {
      const users = await this.prisma.user.findMany({
        where: {
          access: UserAccessType.DIRIGENTE_DO_CLUBE,
        },
        orderBy: [
          {
            id: 'desc',
          },
        ],
      });

      return users;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
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

  async create(dto: CreateUserDto) {
    try {
      const password = await argon.hash(dto.password);

      dto.password = password;

      const user = await this.prisma.user.create({
        data: dto,
      });

      return user;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
