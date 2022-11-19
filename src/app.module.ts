import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { DemoController } from './demo/demo.controller';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [TestModule, DemoModule, UserModule, CatsModule, ManagerModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
