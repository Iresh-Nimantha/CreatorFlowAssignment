import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../model/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateStatusDto } from '../dto/update-status.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  async updateTaskStatus(
    id: string,
    updateStatusDto: UpdateStatusDto,
  ): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if (!task) throw new NotFoundException('Task not found');
    task.status = updateStatusDto.status;
    return task.save();
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskModel.deleteOne({ _id: id });
    if (result.deletedCount === 0)
      throw new NotFoundException('Task not found');
  }
}
