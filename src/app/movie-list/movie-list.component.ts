import { MovieListService } from './../movie-list.service';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HeaderHomeComponent } from "../header-home/header-home.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, HeaderHomeComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  starConfig: any;
  movies: any;
 constructor( private MovieListService:MovieListService){}

 ngOnInit() {
  this.MovieListService.getMovies().subscribe((res : any) => this.movies = res.results);
  console.log();
 }
 reciveFromChild(id: number) {
    console.log(id);
  }
  

}
