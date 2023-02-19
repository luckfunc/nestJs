import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GModule } from './g/g.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [GModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
