import {
  Controller,
  Post,
  Put,
  Body,
  HttpCode,
  Get,
  Query,
  HttpStatus,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AddClassTeamDto, GetAllClassTeamDto, UpdateClassTeamDto } from './dto';
import { ClassTeamService } from './classTeam.service';

@Controller('class-team')
export class ClassTeamController {
  constructor(private classTeamService: ClassTeamService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  add(@Body() dto: AddClassTeamDto) {
    return this.classTeamService.add(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateClassTeamDto) {
    return this.classTeamService.update(dto);
  }

  @Get('one/:classTeamId')
  getOne(@Param('classTeamId', ParseIntPipe) classTeamId: number) {
    return this.classTeamService.getOne(classTeamId);
  }

  @Get()
  getAll(@Query() dto: GetAllClassTeamDto) {
    return this.classTeamService.getAll(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.classTeamService.remove(id);
  }
}
