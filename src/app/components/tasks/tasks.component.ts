import { Component, OnInit } from '@angular/core'
import { Task } from 'src/app/models/Task'
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

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t))
  }

  deleteTask(task: Task) {
    if (task.id) {
      this.taskService
        .deleteTask(task.id)
        .subscribe(
          () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        )
    }
  }

  toggleReminder(task: Task) {
    if (task.id) {
      this.taskService
        .updateTask({ ...task, reminder: !task.reminder })
        .subscribe((t) => {
          const index = this.tasks.indexOf(t)
          if (index !== -1) {
            this.tasks[index] = { ...t }
          }
        })
    }
  }
}
