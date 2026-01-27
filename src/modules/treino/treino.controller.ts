import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TreinoService } from './treino.service';
import { CreateTreinoDto } from './dto/createTreino.dto';
import { GetAllTreinoDto } from './dto/getAllTreino.dto';

@Controller('treino')
export class TreinoController {
  constructor(private readonly treinoService: TreinoService) {}

  @Post('create')
  create(@Body() dto: CreateTreinoDto) {
    return this.treinoService.create(dto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllTreinoDto) {
    return this.treinoService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treinoService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateTreinoDto) {
    return this.treinoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treinoService.remove(+id);
  }
}
