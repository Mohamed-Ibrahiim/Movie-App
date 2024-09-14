import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {

}
