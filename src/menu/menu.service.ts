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
        "route": "#/dashboard",
        "sort": 4,
        "children": null
    },
    {
        "id": 2,
        "name": "Developers",
        "icon": "ExperimentOutlined",
        "route": "#/developers",
        "sort": 3,
        "children": [
            {
                "id": 21,
                "name": "Game List",
                "icon": "",
                "route": "#/developers/game",
                "sort": 0,
                "children": null
            },
            {
                "id": 22,
                "name": "Create Game",
                "icon": "",
                "route": "#/download",
                "sort": 0,
                "children": null
            }
        ]
    },
    {
        "id": 4,
        "name": "Managers",
        "icon": "CrownOutlined",
        "route": "#/managers",
        "sort": 1,
        "children": [
            {
                "id": 42,
                "name": "Category",
                "icon": "",
                "route": "#/managers/category",
                "sort": 0,
                "children": null
            },
            {
                "id": 45,
                "name": "Home Display",
                "icon": "",
                "route": "#/managers/homeDisplay",
                "sort": 0,
                "children": null
            },
            {
                "id": 41,
                "name": "Games",
                "icon": "",
                "route": "#/managers/game",
                "sort": 0,
                "children": null
            },
            {
                "id": 43,
                "name": "Comment",
                "icon": "",
                "route": "#/managers/comment",
                "sort": 0,
                "children": null
            },
            {
                "id": 44,
                "name": "Ab test",
                "icon": "",
                "route": "#/managers/abtest",
                "sort": 0,
                "children": null
            },
            {
                "id": 46,
                "name": "Game Import",
                "icon": "",
                "route": "#/managers/gameimport",
                "sort": 0,
                "children": null
            },
            {
                "id": 47,
                "name": "Groups",
                "icon": "",
                "route": "#/managers/groups",
                "sort": 0,
                "children": null
            }
        ]
    },
    {
        "id": 5,
        "name": "Site",
        "icon": "GlobalOutlined",
        "route": "#/websiteManager",
        "sort": 0,
        "children": [
            {
                "id": 51,
                "name": "Site",
                "icon": "",
                "route": "#/websiteManager/websiteList",
                "sort": 1,
                "children": null
            },
            {
                "id": 53,
                "name": "Game Collection",
                "icon": "",
                "route": "#/websiteManager/gameCollection",
                "sort": 2,
                "children": null
            }
        ]
    },
    {
        "id": 6,
        "name": "Language",
        "icon": "CrownOutlined",
        "route": "#/language",
        "sort": 0,
        "children": [
            {
                "id": 61,
                "name": "Language",
                "icon": "",
                "route": "#/managers/language",
                "sort": 0,
                "children": null
            },
            {
                "id": 62,
                "name": "About Me",
                "icon": "",
                "route": "#/managers/homepage",
                "sort": 0,
                "children": null
            },
            {
                "id": 63,
                "name": "Contact Me",
                "icon": "",
                "route": "#/managers/contactme",
                "sort": 0,
                "children": null
            }
        ]
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
