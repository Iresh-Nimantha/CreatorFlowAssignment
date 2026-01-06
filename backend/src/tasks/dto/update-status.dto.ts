import { IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsIn(['OPEN', 'IN_PROGRESS', 'DONE'])
  status: string;
}
