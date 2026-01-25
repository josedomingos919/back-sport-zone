import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddSchoolResourceDto, UpdateSchoolResourceDto } from './dto';

@Injectable()
export class SchoolResourceService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddSchoolResourceDto) {
    try {
      const schoolResource = await this.prisma.schoolResource.create({
        data: dto,
      });

      return schoolResource;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async update(dto: UpdateSchoolResourceDto) {
    try {
      const schoolResource = await this.prisma.schoolResource.update({
        where: {
          id: dto.id,
        },
        data: dto,
      });

      return schoolResource;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }
}
