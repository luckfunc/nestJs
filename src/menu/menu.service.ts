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
          "name": "Dashboard",
          "icon": "HomeOutlined",
          "route": "#/home/dashboard",
          "sort": 4,
          "children": null
        },
        {
          "id": 2,
          "name": "Demo2",
          "icon": "ExperimentOutlined",
          "route": "#/home/demo1",
          "sort": 3,
          "children": [
            {
              "id": 21,
              "name": "Children 2-1",
              "icon": "",
              "route": "#/home/demo1/child1",
              "sort": 0,
              "children": null
            },
          ]
        },
        {
          "id": 3,
          "name": "Demo2",
          "icon": "CrownOutlined",
          "route": "#/home/demo2",
          "sort": 1,
          "children": [
            {
              "id": 31,
              "name": "Children 3-1",
              "icon": "",
              "route": "#/home/demo2/child1",
              "sort": 0,
              "children": null
            },
            {
              "id": 32,
              "name": "Children 3-2",
              "icon": "",
              "route": "#/home/demo2/child2",
              "sort": 0,
              "children": null
            },
          ]
        },
        {
          "id": 4,
          "name": "Demo3",
          "icon": "GlobalOutlined",
          "route": "#/home/demo3",
          "sort": 0,
          "children": [
            {
              "id": 41,
              "name": "Children 4-1",
              "icon": "",
              "route": "#/home/demo3/child1",
              "sort": 1,
              "children": null
            },
          ]
        },
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
