import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt automatically
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ default: 'OPEN', enum: ['OPEN', 'IN_PROGRESS', 'DONE'] })
  status: string;

  @Prop({ default: 1, enum: [1, 2, 3] }) // Example: priority 1=Low,2=Medium,3=High
  priority: number;

  @Prop()
  assignedTo?: string; // Optional user assigned
}

export const TaskSchema = SchemaFactory.createForClass(Task);
