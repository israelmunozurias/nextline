import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save(createTaskDto);
  }

  async findAll() {
    const result = await this.taskRepository.find();
    return { result: result, count: result.length };
  }

  async findOne(id: number) {
    const result = await this.taskRepository.findOne({ where: { id: id } });
    return { ...result, count: 1 };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, { ...updateTaskDto });
  }

  async remove(id: number) {
    return await this.taskRepository.softDelete({ id });
  }
}
