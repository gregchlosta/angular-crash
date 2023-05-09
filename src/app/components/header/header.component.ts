import { Component, inject, signal } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from 'src/app/services/ui.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
