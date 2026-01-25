import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InvoicePaymentDiscountsService } from './Invoice-Payment-discounts.service';
import { AddInvoicePaymentDiscountsDto } from './dto/addInvoicePaymentDiscountsDto';
import { UpdateInvoicePaymentDiscountsDto } from './dto/updateInvoicePaymentDiscountsDto';

@Controller('invoice-payment-iscounts')
export class InvoicePaymentDiscountsController {
  constructor(private invoicePaymentDiscountsService: InvoicePaymentDiscountsService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  addStudentSupervisor(@Body() dto: AddInvoicePaymentDiscountsDto) {
    return this.invoicePaymentDiscountsService.add(dto);
  }

  @Get()
  getAll() {
    return this.invoicePaymentDiscountsService.getAllStudentSupervisor();
  }

  @Get('/:invoicePaymentDiscountsId')
  getByStudentSupervisorId(@Param('invoicePaymentDiscountsId', ParseIntPipe) countryId: number) {
    return this.invoicePaymentDiscountsService.getByStudentSupervisorId(countryId);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateMonth(@Body() dto: UpdateInvoicePaymentDiscountsDto) {
    return this.invoicePaymentDiscountsService.update(dto);
  }

  @Delete('/:id')
  getByCountryId(@Param('id', ParseIntPipe) id: number) {
    return this.invoicePaymentDiscountsService.remove(id);
  }
}
