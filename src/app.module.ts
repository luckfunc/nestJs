import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GModule } from './g/g.module';

@Module({
  imports: [GModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
