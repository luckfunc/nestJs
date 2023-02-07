import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import { join } from 'path';
// //全局中间件白名单,只允许路由为menu的通过
// const whileList = ['/menu'];
// //全局中间件
// function Middleware(req: Request, res: Response, next: NextFunction) {
//   console.log('全局中间件执行了-----------');
//   console.log('输出的是路由地址:', req.originalUrl, );
//   if(whileList.includes(req.originalUrl)) {
//     next();  //只允许路由为menu的通过
//   }else {
//     res.send('小黑子露出鸡角了吧');
//   }

// }
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.use(Middleware)
  app.use(cors()); //跨域
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/123'
  }); //配置静态资源访问路径
  // app.enableCors();
  await app.listen(4000);
}
bootstrap();
//npm i xxx -D '将安装包信息加入到devDependencies开发依赖'
