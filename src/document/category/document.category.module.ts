import { Module } from '@nestjs/common';
import { DocumentCategoryService } from './document.category.service';
import { DocumentCategoryController } from './document.category.controller';

@Module({
  controllers: [DocumentCategoryController],
  providers: [DocumentCategoryService],
})
export class DocumentCategoryModule {}
