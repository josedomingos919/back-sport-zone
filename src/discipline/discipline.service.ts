import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDisciplineDto, AddDisciplineDto } from './dto';

@Injectable()
export class DisciplineService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddDisciplineDto) {
    try {
      const discipline = await this.prisma.discipline.create({
        data: dto,
      });

      return discipline;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getAll() {
    try {
      const disciplines = await this.prisma.discipline.findMany({
        orderBy: {
          name: 'asc',
        },
      });

      return disciplines;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async update(dto: UpdateDisciplineDto) {
    try {
      const discipline = await this.prisma.discipline.update({
        where: {
          id: dto.id,
        },
        data: dto,
      });

      return discipline;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async remove(id: number) {
    const response = this.prisma.discipline.delete({ where: { id } });

    return response;
  }
}
