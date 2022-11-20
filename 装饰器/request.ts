import axios from 'axios'

const Get = (url: string): Function => {
  return (target: any, key: any, descriptor: any) => {
    // console.log(descriptor.value);

    const func = descriptor.value;
    axios.get(url).then((res) => {
      func(res, {
        status: 200,
        success: true
      })
    }).catch((e: any) => {
      func(e, {
        status: 500,
        success: false
      })
    })
  }
}
class Controller {
  constructor() {

  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(res: any, status: any) {
    console.log(res.data.result.list, status); 
    
  }
}