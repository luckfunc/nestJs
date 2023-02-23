import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { query } from 'express';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }
  @Post("/add/tags")
  addTags(@Body() params: {tags: string[], useId: number}) {
    return this.testService.addTags(params);
  }

  @Get()
  findAll(@Query() query: { keyword: string, page: number, pageSize: number }) {
    return this.testService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete()
  remove(@Param("id") id: number) {
    console.log(id);
    return this.testService.remove(+id);
  }
}
