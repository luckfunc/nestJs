import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    //在controller里面使用UserService模块
    private readonly UserService: UserService
    ) {}

  @Get()
  getHello(): string {
    return this.UserService.findAll();
  }
}
