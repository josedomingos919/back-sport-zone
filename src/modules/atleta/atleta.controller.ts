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
import { AtletaService } from './atleta.service';
import { CreateAtletaDto } from './dto/createAtleta.dto';
import { GetAllAtletasDto } from './dto/getAllAtleta.dto';

@Controller('atleta')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {}

  @Post('create')
  create(@Body() createClubeDto: CreateAtletaDto) {
    return this.atletaService.create(createClubeDto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllAtletasDto) {
    return this.atletaService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atletaService.findOne(+id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClubeDto: CreateAtletaDto,
  ) {
    return this.atletaService.update(id, updateClubeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atletaService.remove(+id);
  }
}
