import { Controller, Get } from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('office')
export class OfficeController {
  constructor(private officeService: OfficeService) {}

  @Get()
  getAll() {
    return this.officeService.getAll();
  }
}
