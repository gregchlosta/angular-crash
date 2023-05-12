import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {}
