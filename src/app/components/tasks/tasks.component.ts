import { Component, OnInit } from '@angular/core'
import { CreateTask, Task } from 'src/app/models/Task'
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

  addTask(task: CreateTask) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t))
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task.id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      )
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe()
  }
}
