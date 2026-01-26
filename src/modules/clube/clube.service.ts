import { Injectable } from '@nestjs/common';
import { CreateClubeDto } from './dto/createClube.dto';
import { UpdateClubeDto } from './dto/updateClube.dto';

@Injectable()
export class ClubeService {
  create(createClubeDto: CreateClubeDto) {
    return 'This action adds a new clube';
  }

  findAll() {
    return `This action returns all clube`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clube`;
  }

  update(id: number, updateClubeDto: UpdateClubeDto) {
    return `This action updates a #${id} clube`;
  }

  remove(id: number) {
    return `This action removes a #${id} clube`;
  }
}
