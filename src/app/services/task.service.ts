import { Injectable, inject, signal } from '@angular/core'
import { CreateTask, Task } from '../models/Task'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }

  httpClient = inject(HttpClient)

  tasks = signal<Task[]>([])

  private tasks$ = this.httpClient
    .get<Task[]>(this.apiUrl)
    .subscribe((v) => this.tasks.set(v))

  addTask(task: CreateTask) {
    this.httpClient
      .post<Task>(this.apiUrl, task, this.httpOptions)
      .subscribe((v) => this.tasks.update((prevValue) => [...prevValue, v]))
  }

  updateTask(task: Task): void {
    this.httpClient
      .put<Task>(`${this.apiUrl}/${task.id}`, task, this.httpOptions)
      .subscribe((newElement) =>
        this.tasks.update((prevValue) => {
          const i = prevValue.indexOf(task)
          const newTasks = [...prevValue]
          newTasks[i] = newElement
          return newTasks
        })
      )
  }

  deleteTask(id: number): void {
    this.httpClient
      .delete<Task>(`${this.apiUrl}/${id}`)
      .subscribe((v) =>
        this.tasks.update((prevValue) => prevValue.filter((t) => t.id !== id))
      )
  }
}
