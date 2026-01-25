import { Controller, Get } from '@nestjs/common';
import { CoutryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private countryService: CoutryService) {}

  @Get()
  getAll() {
    return this.countryService.getAllCoutry();
  }
}
