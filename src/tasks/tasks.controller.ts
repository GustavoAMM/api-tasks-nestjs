import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { createTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        return this.tasksService.createTasks(newTask.title, newTask.description)
    }

    @Delete('/:id')
    deleteTasks(@Param('id') id: string) {
        this.tasksService.deleteTasks(id)
    }
}
