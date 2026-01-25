import { GetAllUserDTO } from './dto';
import { UserService } from './user.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll(@Query() queryParams: GetAllUserDTO) {
    return this.userService.getAll(queryParams);
  }

  @Get('search/:keword')
  search(@Param('keword') keword: string) {
    return this.userService.search(keword);
  }
}
