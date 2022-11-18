import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        //findAll这个方法名称不是固定的   //nest g controller
        return 'This action returns all cats';
    }
}