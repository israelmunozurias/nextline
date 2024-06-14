import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsString()
  status: string;

  @IsDate()
  @Type(() => Date)
  fechaEntrega: Date;

  @IsString()
  comentarios: string;

  @IsNumber()
  creadoPor: number;

  @IsString()
  tag: string;

  @IsString()
  file: string;
}
