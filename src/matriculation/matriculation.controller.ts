import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MatriculationService } from './matriculation.service';
import { GetClassTeamDto } from './dto';
import { UpdateMatriculationDto } from './dto/updateMatriculationDto';
import { AddMatriculationDto } from './dto/addMatriculationDto';
import { GetAllMatriculationDto } from './dto/getAllMatriculationDto';

@Controller('matriculation')
export class MatriculationController {
  constructor(private matriculationService: MatriculationService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addDiscipline(@Body() dto: AddMatriculationDto) {
    return this.matriculationService.add(dto);
  }

  @Get('all')
  getAll(@Query() dto: GetAllMatriculationDto) {
    return this.matriculationService.getAllMatriculation(dto);
  }

  @Put()
  update(@Body() dto: UpdateMatriculationDto) {
    return this.matriculationService.update(dto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.matriculationService.remove(id);
  }

  @Get('classteam')
  getClassTeam(@Query() dto: GetClassTeamDto) {
    return this.matriculationService.getClassTeam(dto);
  }
}
