import { Controller, Get, Request, Post, Body, Patch, Param, Delete, Headers, Header, HttpCode, Query, Ip, Redirect, Version, HostParam } from '@nestjs/common';
import { query } from 'express';
import { url } from 'inspector';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get()
  getInfo(@HostParam() host) {
    console.log('host', host)
  }

  /*  @Get()
   findAll(@Request() req) {
     console.log('req', req.query);
 
     return {
       code: 200
     }
   } */
  //@Get('ab*de') //路由通配符 路由同样支持模式匹配。例如，星号被用作通配符，将匹配任何字符组合。
  /* @Get('redirect')
  @Redirect('https://gogogo7.com')// 读取这个get请求会重定向到redirect */
  @Get('docs')
  // @Version('v1')
  @Redirect('https://gogogo7.com')
  getBlog(@Query() query) {
    console.log('query', query);
    if (query && query['123'] === '123') {
      return { url: 'https:gogogo7.com/tags'}
      
    }
  }
  @Get(':id')
  findCat(@Param('id') id) {
    console.log('id', id);
    if(id === '123') {
      return {
        code: 200
      }
    }else {
      return {
        code: 500,
        message: '服务器出错了'
      }
    }
  }
  @Get('doces/:id')
  findOneName(@Param() param) {
    console.log('param', param);
    return {
      code: 302
    }
  }
  
  // @HttpCode(204) //指定HTTP状态码
  /* findAll(@Query() query) {
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
  } */

  //post请求
  /*  @Post()
   findOne(@Request() req) {
     console.log('req', req.body);
     return {
       code: 200
     }
   } */
  @Post()
  @Header('Cache-Control', 'none') //定义表头
  findOne(@Body('name') body) {
    console.log('body', body);
    return {
      code: 200
    }
  }
  /* 
  @Request()，@Req()	req
  @Response()，@Res()*	res
  @Next()	next
  @Session()	req.session
  @Param(key?: string)	req.params/req.params[key]
  @Body(key?: string)	req.body/req.body[key]
  @Query(key?: string)	req.query/req.query[key]
  @Headers(name?: string)	req.headers/req.headers[name]
  @Ip()	req.ip
  @HostParam()	req.hosts
  */
  //动态参数
  @Get(':id')
  @HttpCode(500)
  findId(@Param('id') id, @Headers('cookie') headers, @Ip() Ip) {
    console.log(id, 'headers', headers);
    console.log('我的ip地址是', Ip);
    return {
      msg: '服务器错误'
    }
  }

}
