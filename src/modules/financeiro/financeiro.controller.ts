import {
  Put,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  UseGuards,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { FinanceiroService } from './financeiro.service';
import { CreateMovimentoDto } from './dto/CreateMovimentoDto';
import { GetAllMovimentosDto } from './dto/GetAllMovimentosDto';

import { Response } from 'express';
import { Res, BadRequestException } from '@nestjs/common';

@Controller('financeiro')
export class FinanceiroController {
  constructor(private financeiroService: FinanceiroService) {}

  @Get('export/excel')
  async exportExcel(
    @Query('dataInicio') dataInicio: string,
    @Query('dataFim') dataFim: string,
    @Res() res: Response,
  ) {
    if (!dataInicio || !dataFim) {
      throw new BadRequestException(
        'Data de início e data de fim são obrigatórias',
      );
    }

    const buffer = await this.financeiroService.exportToExcel(
      new Date(dataInicio),
      new Date(dataFim),
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=relatorio-movimentos.xlsx',
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.end(buffer);
  }

  @UseGuards(JwtGuard)
  @Get('all')
  getAllMovimento(@Query() queryParams: GetAllMovimentosDto) {
    return this.financeiroService.getAllMovimento(queryParams);
  }

  @UseGuards(JwtGuard)
  @Post('create')
  createMovimento(@Body() dto: CreateMovimentoDto) {
    return this.financeiroService.createMovimento(dto);
  }

  @UseGuards(JwtGuard)
  @Put('update/:id')
  updateMovimento(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateMovimentoDto,
  ) {
    return this.financeiroService.updateMovimento(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteMovimento(@Param('id', ParseIntPipe) id: number) {
    return this.financeiroService.deleteMovimento(id);
  }
}
