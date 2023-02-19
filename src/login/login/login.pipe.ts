import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata);
    const DTO = plainToInstance(metadata.metatype, value); //DTO data transformer Obj
    const errorMessage = await validate(DTO);
    if (errorMessage.length) {
      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    }
    console.log(errorMessage);
    console.log(DTO);
    return value;
  }
}
