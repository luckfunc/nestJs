import { ApiProperty } from "@nestjs/swagger"
export class CreateGuardDto {
  @ApiProperty({ example: "小薛" })
  name: string
  @ApiProperty({ example: 20 })
  age: number
}
