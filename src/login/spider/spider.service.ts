import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class SpiderService {
  async findAll() {
    const urls: string[] = [];
    const baseurl = 'https://www.xgmn01.com';
    const nextText = '下一页';
    let index = 0;
    const getImg = async () => {
      let url = `https://www.xgmn01.com/Xiuren/Xiuren25025${index? '_'+ index : ''}.html`;
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
    console.log('urls=', urls);
    this.writeFile(urls);
    return 'success'
  }
  writeFile(urls: string[]) {
    urls.forEach(async url => {
      const buffer = await axios.get(url, { responseType: "arraybuffer" }).then(res => res.data);
      const ws = fs.createWriteStream(path.join(__dirname, '../cos' + new Date().getTime() + '.jpg'));
      ws.write(buffer);
    })
  }

}
