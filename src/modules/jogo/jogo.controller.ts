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
import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/createJogo.dto';
import { GetAllJogoDto } from './dto/getAllJogo.dto';

@Controller('treino')
export class JogoController {
  constructor(private readonly treinoService: JogoService) {}

  @Post('create')
  create(@Body() dto: CreateJogoDto) {
    return this.treinoService.create(dto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllJogoDto) {
    return this.treinoService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treinoService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateJogoDto) {
    return this.treinoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treinoService.remove(+id);
  }
}
