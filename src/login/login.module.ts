import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SpiderModule } from './spider/spider.module';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [SpiderModule]
})
export class LoginModule {}
