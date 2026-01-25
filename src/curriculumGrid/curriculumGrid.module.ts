import { Module } from '@nestjs/common';
import { CurriculumGridService } from './curriculumGrid.service';
import { CurriculumGridController } from './curriculumGrid.controller';

@Module({
  controllers: [CurriculumGridController],
  providers: [CurriculumGridService],
})
export class CurriculumGridModule {}
