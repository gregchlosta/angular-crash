import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() text: string = ''
  @Input() color: string = 'green'

  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }
}
