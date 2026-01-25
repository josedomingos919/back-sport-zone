import { Module } from '@nestjs/common';
import { DocumentRequestService } from './document.request.service';
import { DocumentRequestController } from './document.request.controller';

@Module({
  providers: [DocumentRequestService],
  controllers: [DocumentRequestController],
})
export class DocumentRequestModule {}
