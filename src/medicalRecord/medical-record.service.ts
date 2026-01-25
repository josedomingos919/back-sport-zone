import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddMedicalRecordDto } from './dto/addMedicalRecordDto';
import { UpdateMedicalRecordDto } from './dto/updateMedicalRecordDto';

@Injectable()
export class MedicalRecorService {
  constructor(private prisma: PrismaService) {}

  async add(dto: AddMedicalRecordDto) {
    try {
      const medicalRecord = await this.prisma.medicalRecord.create({
        data: dto,
      });

      return medicalRecord;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  getAllMedicalRecord() {
    return this.prisma.medicalRecord.findMany({
      include: {
        registration: true,
      },
    });
  }

  getByMedicalRecordId(MedicalRecordId: number) {
    return this.prisma.medicalRecord.findMany({
      where: {
        id: MedicalRecordId,
      },
    });
  }

  async update(dto: UpdateMedicalRecordDto) {
    const { id, ...data } = dto;

    try {
      const response = await this.prisma.medicalRecord.update({
        where: {
          id,
        },
        data,
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async remove(id: number) {
    const response = await this.prisma.medicalRecord.delete({
      where: {
        id,
      },
    });

    return response;
  }
}
