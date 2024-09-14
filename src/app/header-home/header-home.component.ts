import { routes } from './../app.routes';
import { Component } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
  query :any ;
  constructor(private MovieListService :MovieListService  ,private router : Router){}

    search(query : string){
    this.MovieListService.getSearchResult(query);
    this.router.navigate([`/movie-Search/${query}`]);
  }
}
