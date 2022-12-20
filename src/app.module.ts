import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service 2';
import { TestModule } from './test/test.module';
import { DemoController } from './demo/demo.controller';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import { ManagerModule } from './manager/manager.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TestModule, DemoModule, UserModule, CatsModule, ManagerModule, LoginModule],
  controllers: [AppController, DemoController],
  // providers: [AppService],
  providers: [AppService2, {
    provide: 'ABC',
    useClass: AppService
  }, {
    provide: 'name',
    useValue: ['xdd', 'xjd']

  }, {
    provide: 'CCC',
    inject: [AppService2],
    async useFactory (AppService2: AppService2) {
      return await new Promise((r) => {
        setTimeout(() => {
          r(AppService2.getHello())
        }, 2000)
      })
    }
  }],
})
export class AppModule {}
