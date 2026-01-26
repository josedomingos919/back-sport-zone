import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClubeService } from './clube.service';
import { CreateClubeDto } from './dto/createClube.dto';
import { UpdateClubeDto } from './dto/updateClube.dto';

@Controller('clube')
export class ClubeController {
  constructor(private readonly clubeService: ClubeService) {}

  @Post()
  create(@Body() createClubeDto: CreateClubeDto) {
    return this.clubeService.create(createClubeDto);
  }

  @Get()
  findAll() {
    return this.clubeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubeDto: UpdateClubeDto) {
    return this.clubeService.update(+id, updateClubeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubeService.remove(+id);
  }
}
