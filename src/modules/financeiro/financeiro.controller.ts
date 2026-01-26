import {
  Put,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { FinanceiroService } from './financeiro.service';
import { CreateMovimentoDto } from './dto/CreateMovimentoDto';
import { GetAllMovimentosDto } from './dto/GetAllMovimentosDto';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('financeiro')
export class FinanceiroController {
  constructor(private financeiroService: FinanceiroService) {}

  @Get('all')
  getAllMovimento(@Query() queryParams: GetAllMovimentosDto) {
    return this.financeiroService.getAllMovimento(queryParams);
  }

  @Post('create')
  createMovimento(@Body() dto: CreateMovimentoDto) {
    return this.financeiroService.createMovimento(dto);
  }

  @Put('update/:id')
  updateMovimento(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateMovimentoDto,
  ) {
    return this.financeiroService.updateMovimento(id, dto);
  }

  @Delete(':id')
  deleteMovimento(@Param('id', ParseIntPipe) id: number) {
    return this.financeiroService.deleteMovimento(id);
  }
}
