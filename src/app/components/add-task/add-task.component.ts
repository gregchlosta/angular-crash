import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { Subscription } from 'rxjs'
import { CreateTask, Task } from 'src/app/models/Task'
import { UiService } from 'src/app/services/ui.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private uiService: UiService) {}

  text: string = ''
  day: string = ''
  reminder: boolean = false

  showAddTask = this.uiService.showAddTask

  @Output() onAddTask = new EventEmitter<CreateTask>()

  onSubmit() {
    if (!this.text) {
      alert('Please add task!')
      return
    }

    this.onAddTask.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    })

    this.text = ''
    this.day = ''
    this.reminder = false
  }
}
