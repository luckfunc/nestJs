import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/response';
// import { HttpFilter } from './common/filter';
import { ValidationPipe } from '@nestjs/common';
// import { RoleGuard } from './guard/role/role.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //初始化文档
  const options = new DocumentBuilder().addBearerAuth().setTitle("我的小飞机").setDescription("很大").setVersion("1").build();

  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup("/api-docs", app, document);
  app.useGlobalInterceptors(new Response());
  // app.useGlobalFilters(new HttpFilter());
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new RoleGuard());
  await app.listen(3000);
}
bootstrap();
