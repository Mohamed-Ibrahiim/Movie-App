import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HeaderHomeComponent,MovieListComponent,MoviDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movie_App';
}
