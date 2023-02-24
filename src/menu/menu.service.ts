import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return {
      data: [
        {
          "id": 1,
          "name": "仪表盘",
          "icon": "HomeOutlined",
          "route": "#/home/dashboard",
          "sort": 4,
          "children": null
        },
        {
          "id": 2,
          "name": "学生",
          "icon": "ExperimentOutlined",
          "route": "#/home/person",
          "sort": 3,
        },
        {
          "id": 3,
          "name": "座位",
          "icon": "CrownOutlined",
          "route": "#/home/seat",
          "sort": 1,
        },
        {
          "id": 4,
          "name": "公告",
          "icon": "GlobalOutlined",
          "route": "#/home/announcement",
          "sort": 0,
        }
      ]
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
