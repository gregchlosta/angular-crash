import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ButtonComponent } from './components/button/button.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { TasksComponent } from './components/tasks/tasks.component'
import { TaskItemComponent } from './components/task-item/task-item.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AddTaskComponent } from './components/add-task/add-task.component'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
