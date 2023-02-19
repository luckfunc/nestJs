import { Injectable } from '@nestjs/common';
import { CreateImgDto } from './dto/create-img.dto';
import { UpdateImgDto } from './dto/update-img.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { join } from 'path';
@Injectable()
export class ImgService {
  async findAll() {
    const urls: string[] = [];
    const baseurl = 'https://www.xgmn01.com';
    const nextText = '下一页';
    let index = 0;
    const getImg = async () => {
      let url = `https://www.xgmn01.com/XiaoYu/XiaoYu24588${index? '_'+ index : ''}.html`;
      const body = await axios.get(url).then(res => res.data);
      const $ = cheerio.load(body);
      const page = $(`.pagination`).eq(0).find('a');
      const pageArr = page.map(function () {
        return $(this).text();
      }).toArray();
      if (pageArr.includes(nextText)) {
        $('.article-content p img').each(function() {
          urls.push(baseurl + $(this).attr('src'));
        })
        index++;
        await getImg()
        console.log(index, 'index')
      }
    }
    await getImg();
    console.log('urls=', urls.length);
    this.writeFile(urls);
    return 'success'
  }
  writeFile(urls: string[]) {
    urls.forEach(async url => {
      const buffer = await axios.get(url, { responseType: "arraybuffer" }).then(res => res.data);
      const ws = fs.createWriteStream(join(__dirname, '../杨晨晨Yome' + new Date().getTime() + '.jpg'));
      ws.write(buffer);
    });
    console.log("爬取完毕");
  }
}
