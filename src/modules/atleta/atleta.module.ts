import { Module } from '@nestjs/common';
import { AtletaService } from './atleta.service';
import { AtletaController } from './atleta.controller';

@Module({
  controllers: [AtletaController],
  providers: [AtletaService],
})
export class AtletaModule {}
