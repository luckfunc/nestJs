import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.use(session({
    secret: 'xdd',//加严
    rolling: true,//每次设置cookie重置默认时间
    name: 'xdd.sid',
    cookie: {
      //httpOnly 是否能够修改
      maxAge: 30000000,// 过期时间 null
    }
  }))
  await app.listen(3001);
}
bootstrap();
