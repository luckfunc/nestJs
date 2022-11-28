import { Controller, Get, Request, Post, Body, Patch, Param, Delete, Headers, HttpCode, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 /*  @Get()
  findAll(@Request() req) {
    console.log('req', req.query);

    return {
      code: 200
    }
  } */
  @Get()
  findAll(@Query() query){
    console.log('query', query);
    return {
      data: [
        { name: 'xdd', age: 22 },
        { name: 'xdd', age: 21 },
        { name: 'xdd', age: 20 },
        { name: 'xdd', age: 19 },
        { name: 'xdd', age: 18 },
      ]
    }
  }

  //post请求
 /*  @Post()
  findOne(@Request() req) {
    console.log('req', req.body);
    return {
      code: 200
    }
  } */
   @Post()
  findOne(@Body('name') body) {
    console.log('body', body);
    return {
      code: 200
    }
  }
  //动态参数
  @Get(':id')
  @HttpCode(500)
    findId(@Param('id') id, @Headers('cookie') headers) {
      console.log(id, 'headers', headers);
      return {
        msg: '服务器错误'
      }
    }
  
}
