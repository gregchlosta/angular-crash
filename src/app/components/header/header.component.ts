import { CommonModule } from '@angular/common'
import { Component, inject, signal } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { UiService } from 'src/app/services/ui.service'
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
})
export class HeaderComponent {
  title = signal('Task Tracker!')

  uiService = inject(UiService)
  router = inject(Router)

  showAddTask = this.uiService.showAddTask

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
