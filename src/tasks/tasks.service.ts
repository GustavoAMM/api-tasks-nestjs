import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity'
import { v4 } from 'uuid'

@Injectable()
export class TasksService {

    private tasks: Task[] = [{
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description',
        status: TaskStatus.PENDING,
    }]

    getAllTasks() {
        return this.tasks;
    }
    createTasks(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING,
        }
        this.tasks.push(task)

        return task;
    }

    deleteTasks(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    updateTasks() { }
}
