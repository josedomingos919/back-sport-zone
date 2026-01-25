import { Module } from '@nestjs/common';
import { SchoolResourceService } from './school-resource.service';
import { SchoolResourceController } from './school-resource.controller';

@Module({
  controllers: [SchoolResourceController],
  providers: [SchoolResourceService]
})
export class SchoolResourceModule {}
