import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input({ required: true }) text!: string
  @Input({ required: true }) color!: string

  @Output() btnClick = new EventEmitter<void>()

  onClick() {
    this.btnClick.emit()
  }
}
