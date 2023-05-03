import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new BehaviorSubject<boolean>(this.showAddTask)

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable()
  }
}
