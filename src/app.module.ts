import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ClubeModule } from './modules/clube/clube.module';
import { EquipaModule } from './modules/equipa/equipa.module';
import { AtletaModule } from './modules/atleta/atleta.module';
import { TreinoModule } from './modules/treino/treino.module';
import { ProvinceModule } from './modules/province/province.module';
import { FinanceiroModule } from './modules/financeiro/financeiro.module';
import { JogoModule } from './modules/jogo/jogo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UserModule,
    ProvinceModule,
    FinanceiroModule,
    EquipaModule,
    ClubeModule,
    AtletaModule,
    TreinoModule,
    JogoModule,
  ],
})
export class AppModule {}
