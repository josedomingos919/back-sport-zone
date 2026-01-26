import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ClubeService } from './clube.service';
import { CreateClubeDto } from './dto/createClube.dto';
import { UpdateClubeDto } from './dto/updateClube.dto';
import { GetAllClubsDto } from './dto/getAllClubs.dto';

@Controller('clube')
export class ClubeController {
  constructor(private readonly clubeService: ClubeService) {}

  @Post('create')
  create(@Body() createClubeDto: CreateClubeDto) {
    return this.clubeService.create(createClubeDto);
  }

  @Get('all')
  findAll(@Query() queryParams: GetAllClubsDto) {
    return this.clubeService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubeService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClubeDto: UpdateClubeDto,
  ) {
    return this.clubeService.update(id, updateClubeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubeService.remove(+id);
  }
}
