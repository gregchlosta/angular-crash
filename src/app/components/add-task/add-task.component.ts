import { Component, EventEmitter, Output, inject, signal } from '@angular/core'
import { CreateTask } from 'src/app/models/Task'
import { UiService } from 'src/app/services/ui.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  text = signal<string>('')
  day = signal<string>('')
  reminder = signal<boolean>(false)

  uiService = inject(UiService)

  showAddTask = this.uiService.showAddTask

  @Output() onAddTask = new EventEmitter<CreateTask>()

  onSubmit() {
    if (!this.text) {
      alert('Please add task!')
      return
    }

    this.onAddTask.emit({
      text: this.text(),
      day: this.day(),
      reminder: this.reminder(),
    })

    this.text.set('')
    this.day.set('')
    this.reminder.set(false)
  }
}
