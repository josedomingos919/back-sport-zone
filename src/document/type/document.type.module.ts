import { Module } from '@nestjs/common';
import { DocumentTypeController } from './document.type.controller';
import { DocumentTypeService } from './document.type.service';

@Module({
  providers: [DocumentTypeService],
  controllers: [DocumentTypeController],
})
export class DocumentTypeModule {}
