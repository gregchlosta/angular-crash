import { CommonModule } from '@angular/common'
import { Component, OnInit, Signal, inject } from '@angular/core'
import { CreateTask, Task } from 'src/app/models/Task'
import { TaskService } from 'src/app/services/task.service'
import { AddTaskComponent } from '../add-task/add-task.component'
import { TaskItemComponent } from '../task-item/task-item.component'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TaskItemComponent],
})
export class TasksComponent {
  taskService = inject(TaskService)

  tasks = this.taskService.tasks

  addTask(task: CreateTask) {
    this.taskService.addTask(task)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id)
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTask(task)
  }
}
