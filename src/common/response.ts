import { Injectable, NestInterceptor, CallHandler } from "@nestjs/common";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

interface Data<T> {
  data: T
}
@Injectable()
export class Response<T> implements NestInterceptor {
  //intercept(context: ExecutionContext, next: CallHandler<T>): Observable<R> | Promise<Observable<R>>;
  intercept(context, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(map(data => {
      return {
        data,
        status: 0,
        message: '成功',
        success: true
      }
    }));
  }

}