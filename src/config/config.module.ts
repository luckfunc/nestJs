import { DynamicModule, Global, Module } from "@nestjs/common";

interface Options {
  path: string
} //接口类型需要在装饰器上面
@Global()
// @Module({ //@Moudle 使用这个装饰器结合@Global装饰器 可以把模块变成全局的  也是需要导入 exports 然后在APPModule里面关联下 这样APP Module里面的模块就可以共享这个模块了
//   providers: [
//     {
//       provide: 'Config',
//       useValue: { baseUrl: "/api" }
//     }
//   ],
//   exports: [
//     {
//       provide: 'Config',
//       useValue: { baseUrl: "/api" }
//     }
//   ]

// })
  @Module({

  })
export class ConfigModule {
  static forRoot(options: Options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: { baseUrl: '/api' + options.path }
        }
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { baseUrl: '/api' + options.path }
        }
      ]
    }
  }

}

// export class ConfigModule {
//   //动态模块 可以增加参数 
//   static forRoot(options: Options): DynamicModule {
//     return {
//       module: ConfigModule,
//       providers: [
//         {
//           provide: 'config',
//           useValue: { baseUrl: '/api' + options.path}
//         }
//       ],
//       exports: [{
//         provide: 'config',
//         useValue: { baseUrl: '/api' + options.path}
//       }]
//     }
//   }
// }