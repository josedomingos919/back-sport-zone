import { Module } from '@nestjs/common';
import { CourseController } from './course.constroller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
