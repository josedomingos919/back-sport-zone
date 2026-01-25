import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CoutryService } from './country.service';

@Module({
  controllers: [CountryController],
  providers: [CoutryService],
})
export class CountryModule {}
