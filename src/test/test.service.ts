import { Body, Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Repository, Like } from 'typeorm';
import { Test } from './entities/test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from './entities/tags.entity';
@Injectable()
export class TestService {
  constructor (
    @InjectRepository(Test) private readonly test: Repository<Test>,
    @InjectRepository(Tags) private readonly tags: Repository<Tags>
   ) {}
  create(createTestDto: CreateTestDto) {
    const data = new Test();
    data.name = createTestDto.name;
    data.age = createTestDto.age;
    console.log(data, "@@@@@@@@@data");
    return this.test.save(data);
  }
  async addTags(params: {tags: string[], useId: number}) {
    console.log(params.tags[2]);
    const userInfo = await this.test.findOne({ where: { id: params.useId} })
    const tagsList: Tags[] = []; 
    for (let index = 0; index < params.tags.length; index++) {
      const T = new Tags()
      T.name = params.tags[index];
      await this.tags.save(T);
      tagsList.push(T)
    }
    userInfo.tags = tagsList;
    this.test.save(userInfo)
    return true
  }

  async findAll(query: { keyword: string, page: number, pageSize: number }) {
    console.log(query);
    const data = await this.test.find({
      relations: ["tags"],
      where: {
        name: Like(`%${query.keyword}%`)
      },
      order: {
        id: "DESC"
      },
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize
    })
    const total = await this.test.count({
      where: {
        name: Like(`%${query.keyword}%`)
      }
    });
    return {
      data,
      total
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return this.test.delete(id);
  }
}
