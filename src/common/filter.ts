// import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
// import { Request, response, Response } from 'express';
// //异常拦截器

// // @Catch(HttpException)
// export class HttpFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const request = ctx.getRequest<Request>();
    
//     const response = ctx.getResponse<Response>();
//     const status = exception.getStatus();
//     response.status(status).json({
//       success: false,
//       time: new Date(),
//       data: exception.message,
//       status,
//       path: request.url
//     })

//   }
// }