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
} from '@nestjs/common';

import { AddClassDto, UpdateClassDto } from './dto';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private classService: ClassService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  add(@Body() dto: AddClassDto) {
    return this.classService.addClass(dto);
  }

  @Put()
  update(@Body() dto: UpdateClassDto) {
    return this.classService.updateClass(dto);
  }

  @Get('all')
  getAll() {
    return this.classService.getAllClasses();
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classService.removeClass(id);
  }
}
