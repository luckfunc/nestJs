import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImgService } from './img.service';
import { CreateImgDto } from './dto/create-img.dto';
import { UpdateImgDto } from './dto/update-img.dto';

@Controller('img')
export class ImgController {
  constructor(private readonly imgService: ImgService) {}
  @Get()
  findAll() {
    return this.imgService.findAll();
  }
}
