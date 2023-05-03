import { Injectable, signal } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public showAddTask = signal<boolean>(false)

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask.update((v) => !v)
  }
}
