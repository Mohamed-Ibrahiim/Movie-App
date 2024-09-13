import { MovieListService } from './../movie-list.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-movi-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MoviDetailsComponent {
  moviedetails: any;
  similarMovies: any;
constructor(private activatedRoute:ActivatedRoute , private MovieListService :MovieListService){}

ngOnInit() {
  const id =this.activatedRoute.snapshot.params['id'];
  this.MovieListService.getMovieDetails(id).subscribe((res: any) => this.moviedetails = res);
  this.MovieListService.getSimilarMovies(id).subscribe((res: any) => this.similarMovies = res);
}
}