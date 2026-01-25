import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/CreateProvinceDto';

@Controller('province')
export class ProvinceController {
  constructor(private provinceService: ProvinceService) {}

  @Get('all')
  getAllProvince() {
    return this.provinceService.getAllProvince();
  }

  @Post('create')
  createProvince(@Body() dto: CreateProvinceDto) {
    return this.provinceService.createProvince(dto);
  }

  @Put('update/:id')
  updateProvince(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateProvinceDto,
  ) {
    return this.provinceService.updateProvince(id, dto);
  }

  @Delete(':id')
  deleteProvince(@Param('id', ParseIntPipe) id: number) {
    return this.provinceService.deleteProvince(id);
  }
}
