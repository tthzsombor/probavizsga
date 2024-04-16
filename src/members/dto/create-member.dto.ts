import { IsDate, IsInt, isNotEmpty } from "class-validator";
import { isContext } from "vm";

export class CreateMemberDto {
  @isNotEmpty()
  name: String;

  @IsNotEmpty()
  @IsDate()
  birth_date: Date;

  @IsString()
  @isContext("F" || "M")
  gender: String;

  @IsDate()
  created_at: Date;
}


