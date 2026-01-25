import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProvinceService } from './province.service';

@Controller('province')
export class ProvinceController {
  constructor(private provinceService: ProvinceService) {}

  @Get()
  getAll() {
    return this.provinceService.getAll();
  }

  @Get('/:countryId')
  getByCountryId(@Param('countryId', ParseIntPipe) countryId: number) {
    return this.provinceService.getByCountryId(countryId);
  }
}
