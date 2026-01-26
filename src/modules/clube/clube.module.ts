import { Module } from '@nestjs/common';
import { ClubeService } from './clube.service';
import { ClubeController } from './clube.controller';

@Module({
  controllers: [ClubeController],
  providers: [ClubeService]
})
export class ClubeModule {}
