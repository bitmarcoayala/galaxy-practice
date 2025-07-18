import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/templates/components/footer/footer.component';
import { NavComponent } from '@shared/templates/components/nav/nav.component';

@Component({
  selector: 'app-modules',
  imports: [
    NavComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './home.panel.component.html',
  styleUrl: './home.panel.component.scss'
})
export class HomePanelComponent {

}
