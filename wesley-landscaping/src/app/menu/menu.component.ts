import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  template: `
    <nav class="menu-bar">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/services">Services</a></li>
        <li><a routerLink="/reviews">Reviews</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class MenuComponent {

}
