import {
  AddDocumentCategoryDto,
  GetAllDocumentCategoryDto,
  UpdateDocumentCategoryDto,
} from './dto';
import { DocumentCategoryService } from './document.category.service';
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

@Controller('document/category')
export class DocumentCategoryController {
  constructor(private documentCategoryService: DocumentCategoryService) {}

  @Post()
  add(@Body() dto: AddDocumentCategoryDto) {
    return this.documentCategoryService.add(dto);
  }

  @Put()
  update(@Body() dto: UpdateDocumentCategoryDto) {
    return this.documentCategoryService.update(dto);
  }

  @Get('all')
  getAll(@Query() dto: GetAllDocumentCategoryDto) {
    return this.documentCategoryService.getAll(dto);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentCategoryService.remove(id);
  }
}
