import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //一般用法使用简写 @Inject('ABC') 修饰
  constructor(@Inject('ABC') private readonly appService: AppService, 
  @Inject('name') private readonly name: string[],//这个name是要使用的name name的value在前面AppModules前面已经定义
  @Inject('CCC') private readonly number: number
  ) {}
  @Get()
  getHello(): any {
    return this.number;
  }
}
