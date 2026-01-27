import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProvinceModule } from './modules/province/province.module';
import { FinanceiroModule } from './modules/financeiro/financeiro.module';
import { ClubeModule } from './modules/clube/clube.module';
import { EquipaModule } from './modules/equipa/equipa.module';

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
  ],
})
export class AppModule {}
