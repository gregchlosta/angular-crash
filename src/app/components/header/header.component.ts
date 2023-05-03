import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UiService } from 'src/app/services/ui.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private uiService: UiService, private router: Router) {}

  title: string = 'Task Tracker!'
  showAddTask = this.uiService.showAddTask

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
