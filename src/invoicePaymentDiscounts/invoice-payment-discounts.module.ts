import { Module } from '@nestjs/common';
import { InvoicePaymentDiscountsController } from './invoice-payment-iscounts.controller';
import { InvoicePaymentDiscountsService } from './Invoice-Payment-discounts.service';

@Module({
  controllers: [InvoicePaymentDiscountsController],
  providers: [InvoicePaymentDiscountsService],
})
export class InvoicePaymentDiscountsModule {}
