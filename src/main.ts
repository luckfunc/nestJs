import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/response';
// import { HttpFilter } from './common/filter';
import { ValidationPipe } from '@nestjs/common';
// import { RoleGuard } from './guard/role/role.guard';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new Response());
  // app.useGlobalFilters(new HttpFilter());
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new RoleGuard());
  await app.listen(3000);
}
bootstrap();
