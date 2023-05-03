import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { UiService } from 'src/app/services/ui.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'Task Tracker!'
  showAddTask: boolean = false
  subscription: Subscription | undefined

  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((v) => (this.showAddTask = v))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
