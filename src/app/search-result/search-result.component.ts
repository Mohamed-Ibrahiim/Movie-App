import { Component } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { Router } from '@angular/router';
import { HeaderHomeComponent } from '../header-home/header-home.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [HeaderHomeComponent, MovieCardComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  movieSearchResult: any;
  constructor(private MovieListService: MovieListService, private router: Router) { }
  ngOnInit() {
    this.movieSearchResult = this.MovieListService.getSearchedMovie().subscribe(movie => { this.movieSearchResult = movie });
  }
  search(query: string) {
    this.MovieListService.getSearchResult(query);
    this.router.navigate([`/movie-Search/${query}`]);
  }

}
