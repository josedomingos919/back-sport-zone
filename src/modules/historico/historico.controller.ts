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
import { HistoricoService } from './historico.service';
import { CreateHistoricoDto } from './dto/createHistorico.dto';
import { GetAllHistoricoDto } from './dto/getAllHistorico.dto';

@Controller('historico')
export class HistoricoController {
  constructor(private readonly historicoService: HistoricoService) {}

  @Post('create')
  create(@Body() dto: CreateHistoricoDto) {
    return this.historicoService.create(dto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllHistoricoDto) {
    return this.historicoService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicoService.findOne(+id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateHistoricoDto,
  ) {
    return this.historicoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicoService.remove(+id);
  }
}
