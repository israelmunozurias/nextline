import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class RegisterDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  branchKey: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  customerKey: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  orderIds: string[];

  @IsString()
  @IsOptional()
  @ApiProperty()
  date?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string;
}
