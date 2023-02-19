import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';
export class CreateLoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 12, {
    message: "不能超过12个字符"
  })
  username: string
  password: string
  @IsNumber()
  age: number
}
