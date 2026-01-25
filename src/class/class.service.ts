import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddClassDto, UpdateClassDto } from './dto';

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async updateClass(dto: UpdateClassDto) {
    try {
      const classs = await this.prisma.class.update({
        where: {
          id: dto.id,
        },
        data: {
          name: dto.name,
        },
      });

      return classs;
    } catch (error) {
      throw new ForbiddenException({
        status: false,
        error,
      });
    }
  }

  async addClass(dto: AddClassDto) {
    try {
      const classs = await this.prisma.class.create({
        data: {
          name: dto.name,
        },
      });

      return classs;
    } catch (error) {
      throw new ForbiddenException({
        status: false,
        error,
      });
    }
  }

  async getAllClasses() {
    try {
      const classes = await this.prisma.class.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      return classes;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async removeClass(id: number) {
    const response = await this.prisma.class.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
