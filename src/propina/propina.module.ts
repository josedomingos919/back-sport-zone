import { Module } from '@nestjs/common';
import { PropinaController } from './propina.controller';
import { PropinaService } from './propina.service';

@Module({
  controllers: [PropinaController],
  providers: [PropinaService],
})
export class PropinaModule {}
