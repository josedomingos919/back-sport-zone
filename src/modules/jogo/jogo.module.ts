import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';

@Module({
  controllers: [JogoController],
  providers: [JogoService],
})
export class JogoModule {}
