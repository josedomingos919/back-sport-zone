import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { AddDisciplineDto } from './dto/addDisciplineDto';
import { UpdateDisciplineDto } from './dto/updateDisciplineDto';

@Controller('discipline')
export class DisciplineController {
  constructor(private disciplineServcie: DisciplineService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addDiscipline(@Body() dto: AddDisciplineDto) {
    return this.disciplineServcie.add(dto);
  }

  @Get('all')
  getAll() {
    return this.disciplineServcie.getAll();
  }

  @Put()
  update(@Body() dto: UpdateDisciplineDto) {
    return this.disciplineServcie.update(dto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.disciplineServcie.remove(id);
  }
}
