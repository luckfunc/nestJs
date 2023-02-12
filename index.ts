import { of, Observable, interval, take, retry, fromEvent } from 'rxjs';
import { map, filter, findIndex, reduce }from 'rxjs/operators'

//fromEvent 可以处理一些dom事件
const click$ = fromEvent(document, 'click');
click$.subscribe(e => {
  
  console.log('e=', e);
})
//1. const observable = new Observable(subscribe => {
//   //rxjs 一般用于处理异步消息
//   subscribe.next(1)
//   subscribe.next(2)
//   subscribe.next(3)

//   setTimeout(() => {
//     subscribe.next(4);
//     subscribe.complete();// 结束发送消息
//   }, 3000);
// });
// observable.subscribe({
//   next: (num: number) => {
//     console.log('num=', num);
//   }
// })

//2.5ms执行一次  0 1 2 3 4 到五的时候结束 

// interval(500).pipe(take(5)).subscribe( e => {
//   console.log('e=', e);
// });

// const subs = interval(500).pipe(map( num => ({ num: num })), filter(v => v.num % 2 === 0)).subscribe(e => {
//   if (e.num === 10) {
//     subs.unsubscribe(); //结束观察
    
//   }
//   console.log('e=', e);
// })

// 3.自定义数据
const subs = of(2, 4, 6, 8, 10).pipe( retry(3), take(5)).subscribe(e => {
  console.log('e=', e); //调取接口失败了 retry可以帮你重新抢救三次
})