import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TasksComponent } from './components/tasks/tasks.component'

const routes: Routes = [
  { path: '', component: TasksComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
