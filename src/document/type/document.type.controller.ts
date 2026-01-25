import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DocumentTypeService } from './document.type.service';
import { AddDocumentTypeDto } from './dto/add.document.type.dto';
import { UpdateDocumentTypeDto } from './dto/update.document.type.dto';
import { GetAllDocumentTypeDto } from './dto/get-all.document.type.dto';

@Controller('document/type')
export class DocumentTypeController {
  constructor(private documentTypeService: DocumentTypeService) {}

  @Post()
  add(@Body() dto: AddDocumentTypeDto) {
    return this.documentTypeService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdateDocumentTypeDto) {
    return this.documentTypeService.update(dto);
  }

  @Get('all')
  getAll(@Query() dto: GetAllDocumentTypeDto) {
    return this.documentTypeService.getAll(dto);
  }

  @Get('all/select')
  getAllSelect() {
    return this.documentTypeService.getAllSelect();
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentTypeService.remove(id);
  }
}
