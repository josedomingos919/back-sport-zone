import { Module } from '@nestjs/common';
import { PriceService } from './prices.service';
import { PriceController } from './prices.constroller';

@Module({
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
