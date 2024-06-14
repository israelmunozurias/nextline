import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Auth } from "src/auth/decorators/auth.decorator";
import { Role } from "src/common/enums/rol.enum";
import { ActiveUser } from "src/common/decorators/active-user.decorator";
import { UserActiveInterface } from "src/common/interfaces/user-active.interface";
import { FileUpload } from "src/common/decorators/file-upload.decorator";

@Auth(Role.USER)
@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post("create")
  @FileUpload("file") // Usa el decorador personalizado
  create(
    @Body() createTaskDto: CreateTaskDto,
    @UploadedFile() file: Express.Multer.File,
    @ActiveUser() user: UserActiveInterface
  ) {
    console.log(file);
    return this.taskService.create(createTaskDto, file);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(":id")
  @FileUpload("file") // Usa el decorador personalizado
  update(
    @Param("id") id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    updateTaskDto.file = `http://localhost:3000/uploads/${file.filename}`;
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.taskService.remove(+id);
  }
}
