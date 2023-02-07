import { Injectable, NestMiddleware } from "@nestjs/common";

import { Request, Response, NextFunction } from "express";

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('中间件被调用');
    // 如果不想使用next 可以发送消息
    res.send('我被拦截了')
    // next()
  }
}