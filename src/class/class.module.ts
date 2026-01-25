import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.constroller';

@Module({
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
