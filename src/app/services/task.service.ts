import { Injectable } from '@angular/core'
import { Task } from '../models/Task'
import { Observable } from 'rxjs'
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

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl)
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, this.httpOptions)
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(
      `${this.apiUrl}/${task.id}`,
      task,
      this.httpOptions
    )
  }

  deleteTask(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/${id}`)
  }
}
