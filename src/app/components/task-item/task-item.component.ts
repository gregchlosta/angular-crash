import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from 'src/app/models/Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class TaskItemComponent {
  @Input() task: Task | undefined
  @Output() onDeleteTask = new EventEmitter<Task>()
  @Output() onToggleTask = new EventEmitter<Task>()

  faTimes = faTimes

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleTask.emit(task)
  }
}
