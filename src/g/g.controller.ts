import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { GService } from './g.service';
import { CreateGDto } from './dto/create-g.dto';
import { UpdateGDto } from './dto/update-g.dto';
//引入uuid
import * as uuid from 'uuid';

console.log('uuid', uuid.v4());
// Nest 自带九个开箱即用的管道，即
// ValidationPipe
// ParseIntPipe
// ParseFloatPipe
// ParseBoolPipe
// ParseArrayPipe
// ParseUUIDPipe
// ParseEnumPipe
// DefaultValuePipe
// ParseFilePipe
//安装uuid pnpm i uuid -S
//pnpm i @types/uuid -D
@Controller('g')
export class GController {
  constructor(private readonly gService: GService) {}

  @Post()
  create(@Body() createGDto: CreateGDto) {
    return this.gService.create(createGDto);
  }

  @Get()
  findAll() {
    return this.gService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    console.log("type==>", typeof id); // ParseIntPipe 可以把字符串的转换成数字
    console.log("id==>", id);
    return this.gService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGDto: UpdateGDto) {
    return this.gService.update(+id, updateGDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gService.remove(+id);
  }
}
