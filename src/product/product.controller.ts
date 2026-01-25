import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get(':code')
  getByCode(@Param('code') code: string) {
    return this.productService.getByCode(code);
  }
}
