import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../model/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().sort({ createdAt: -1 }).exec();
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskModel.findById(id);
    if (!task) throw new NotFoundException('Task not found');

    Object.assign(task, updateTaskDto); // merge updates
    return task.save();
  }

  async updateTaskStatus(id: string, status: string): Promise<Task> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      id,
      { $set: { status } }, // ONLY update status
      { new: true, runValidators: true }, // return updated doc + validate enum
    );

    if (!updatedTask) {
      throw new NotFoundException('Task not found');
    }

    return updatedTask;
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.taskModel.deleteOne({ _id: id });
    if (result.deletedCount === 0)
      throw new NotFoundException('Task not found');
  }
}
