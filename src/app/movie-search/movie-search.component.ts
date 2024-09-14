import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HeaderHomeComponent } from "../header-home/header-home.component";

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MovieCardComponent, HeaderHomeComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  movieSearchResult:any;
  constructor(private MovieListService: MovieListService ,private router:Router) {}
  ngOnInit() {
    this.movieSearchResult = this.MovieListService.getSearchedMovie().subscribe(movie =>{this.movieSearchResult = movie});
  }
   search(query : string){
    this.MovieListService.getSearchResult(query);
    this.router.navigate([`/movie-Search/${query}`]);
  }
}
