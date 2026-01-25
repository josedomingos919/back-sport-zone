import { Module } from '@nestjs/common';
import { DiscountsInUseController } from './discounts-in-use.controller';
import { DiscountsInUseService } from './discounts-in-use.service';

@Module({
  controllers: [DiscountsInUseController],
  providers: [DiscountsInUseService],
})
export class DiscountsInUseModule {}
