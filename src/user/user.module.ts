import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Logger } from 'src/middleware';
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService] //当有模块需要共享的时候使用exports导出
})
export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(Logger).forRoutes('user') //1. 中间件字符串写法
    // consumer.apply(Logger).forRoutes({
    //   path: 'user',
    //   method: RequestMethod.POST //拦截Post请求 发送Get请求不会拦截 但是如果拦截Get请求发送Post请求是会被拦截的 
    // }) // 2. 对象写法
      consumer.apply(Logger).forRoutes(UserController) // 会拦截所有请求

  };

}
