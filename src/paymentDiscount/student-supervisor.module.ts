import { Module } from '@nestjs/common';
import { PaymentDiscountController } from './payment-discount.controller';
import { PaymentDiscountService } from './payment-discount.service';

@Module({
  controllers: [PaymentDiscountController],
  providers: [PaymentDiscountService],
})
export class PaymentDiscountModule {}
