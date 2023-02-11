import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module'
import { MenuModule } from './menu/menu.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
@Module({
  imports: [ListModule, UserModule, ConfigModule.forRoot({
    path: '/xiaoxue'
  }), MenuModule, UploadModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
