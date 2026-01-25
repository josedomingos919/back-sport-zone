import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  ParseIntPipe,
  Param,
  HttpStatus,
  HttpCode,
  Query,
} from '@nestjs/common';

import { AddPricesDto, UpdatePricesDto } from './dto';
import { PriceService } from './prices.service';
import { GetPriceDto } from './dto/getPriceDto';

@Controller('price')
export class PriceController {
  constructor(private pricesService: PriceService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  add(@Body() dto: AddPricesDto) {
    return this.pricesService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdatePricesDto) {
    return this.pricesService.update(dto);
  }

  @Get('all/:schoolYearId')
  getAll(@Param('schoolYearId', ParseIntPipe) schoolYearId: number) {
    return this.pricesService.getAll(schoolYearId);
  }

  @Get('filter')
  getPrice(@Query() query: GetPriceDto) {
    return this.pricesService.getPrice(query);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pricesService.remove(id);
  }
}
