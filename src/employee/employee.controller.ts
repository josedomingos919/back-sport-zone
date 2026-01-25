import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Param,
  Query,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AddEmployeeDto, GetAllEmployeeDto, UpdateEmployeeDto } from './dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  add(@Body() dto: AddEmployeeDto) {
    return this.employeeService.addEmployee(dto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.removeEmployee(id);
  }

  @Get('search/:keword')
  search(@Param('keword') keword: string) {
    return this.employeeService.search(keword);
  }

  @Get('search/teacher/:keword')
  searchTeacher(@Param('keword') keword: string) {
    return this.employeeService.searchTeacher(keword);
  }

  @Get()
  getAll(@Query() queryParams: GetAllEmployeeDto) {
    return this.employeeService.getAllEmployees(queryParams);
  }
}
