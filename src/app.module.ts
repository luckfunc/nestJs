import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GModule } from './g/g.module';
import { LoginModule } from './login/login.module';
import { ImgModule } from './img/img.module';

@Module({
  imports: [GModule, LoginModule, ImgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
