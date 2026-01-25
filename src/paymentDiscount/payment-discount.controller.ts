import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PaymentDiscountService } from './payment-discount.service';
import { AddPaymentDiscountDto } from './dto/addPaymentDiscountDto';
import { UpdatePaymentDiscountDto } from './dto/updatePaymentDiscountDto';

@Controller('payment-discount')
export class PaymentDiscountController {
  constructor(private paymentDiscountService: PaymentDiscountService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addStudentSupervisor(@Body() dto: AddPaymentDiscountDto) {
    return this.paymentDiscountService.add(dto);
  }

  @Get()
  getAll() {
    return this.paymentDiscountService.getAllStudentSupervisor();
  }

  @Get('/:paymentDiscountServiceId')
  getByStudentSupervisorId(@Param('paymentDiscountServiceId', ParseIntPipe) countryId: number) {
    return this.paymentDiscountService.getByStudentSupervisorId(countryId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdatePaymentDiscountDto) {
    return this.paymentDiscountService.update(dto);
  }

  @Delete('/:id')
  getByCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.paymentDiscountService.remove(id);
  }
}
