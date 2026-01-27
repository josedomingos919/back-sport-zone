import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CreateEquipaDto } from './dto/createEquipa.dto';
import { GetAllEquipaDto } from './dto/getAllEquipa.dto';
import { EquipaService } from './equipa.service';

@Controller('equipa')
export class EquipaController {
  constructor(private readonly equipaService: EquipaService) {}

  @Post('create')
  create(@Body() createClubeDto: CreateEquipaDto) {
    return this.equipaService.create(createClubeDto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllEquipaDto) {
    return this.equipaService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipaService.findOne(+id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClubeDto: CreateEquipaDto,
  ) {
    return this.equipaService.update(id, updateClubeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipaService.remove(+id);
  }
}
