import { UpdateSettingDto } from './dto';
import { GetKeysDto } from './dto/getKeysDto';
import { SettingService } from './setting.service';
import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';

@Controller('setting')
export class SettingController {
  constructor(private settingService: SettingService) {}

  @Put('all')
  update(@Body() dto: UpdateSettingDto) {
    return this.settingService.update(dto);
  }

  @Get('all')
  getAll() {
    return this.settingService.getAll();
  }

  @Post('keys')
  getKeys(@Body() query: GetKeysDto) {
    return this.settingService.getKeys(query);
  }

  @Get(':key')
  getOne(@Param('key') key: string) {
    return this.settingService.getOne(key);
  }

  @Post('setting-up')
  settingUp() {
    return this.settingService.settingUp();
  }
}
