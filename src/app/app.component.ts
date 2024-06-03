import { Component } from '@angular/core';
import { BodyComponent } from './modules/body/body.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NavbarComponent } from './modules/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FooterComponent],
})
export class AppComponent {
  title = 'portfolio';
}
