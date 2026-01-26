import { GetAllUserDTO } from './dto';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('all')
  getAll(@Query() queryParams: GetAllUserDTO) {
    return this.userService.getAll(queryParams);
  }

  @Get('search/:keword')
  search(@Param('keword') keword: string) {
    return this.userService.search(keword);
  }

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
