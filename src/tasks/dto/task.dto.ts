import { TaskStatus } from '../tasks.entity';
import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from 'class-validator';

export class createTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;

    @IsString()
    description: string;
}
export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}