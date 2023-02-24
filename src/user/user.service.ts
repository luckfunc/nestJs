import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): any {
    return {
      "data": [
        {
          student_id: 1,
          student_name: "小薛1",
          create_time: "创建时间1"
        },
        {
          student_id: 2,
          student_name: "小薛2",
          create_time: "创建时间1"
        },
        {
          student_id: 3,
          student_name: "小薛3",
          create_time: "创建时间1"
        },
        {
          student_id: 4,
          student_name: "小薛4",
          create_time: "创建时间1"
        }
      ],
      total: 4
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
