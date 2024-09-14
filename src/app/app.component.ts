import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./movie-list/movie-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderHomeComponent } from "./header-home/header-home.component";
import { NoWathListComponent } from "./no-wath-list/no-wath-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, NavbarComponent, HeaderHomeComponent, MovieListComponent, NoWathListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
