import { Module } from '@nestjs/common';
import { EquipaService } from './equipa.service';
import { EquipaController } from './equipa.controller';

@Module({
  controllers: [EquipaController],
  providers: [EquipaService],
})
export class EquipaModule {}
