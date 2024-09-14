import { MovieListService } from './../movie-list.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { WatchListService } from '../watch-list.service';
import { RateComponent } from '../rate/rate.component';

@Component({
  selector: 'app-movi-details',
  standalone: true,
  imports: [DatePipe ,RateComponent],
  templateUrl: './movi-details.component.html',
  styleUrl: './movi-details.component.css'
})
export class MoviDetailsComponent {
  moviedetails: any;
  similarMovies: any;
  watchListArray:any[]=[];
  hovered :any[]=[];
  isHoverd: boolean = false;
  isFavorite: boolean = true

constructor(private activatedRoute:ActivatedRoute , private MovieListService :MovieListService ,private WatchListService:WatchListService){}

ngOnInit() {
  
  const id =this.activatedRoute.snapshot.params['id'];
  this.MovieListService.getMovieDetails(id).subscribe((res: any) => this.moviedetails = res);
  this.MovieListService.getSimilarMovies(id).subscribe((res: any) => this.similarMovies = res);


}
  hoverd() {
    this.isHoverd = !this.isHoverd;
    if (this.isHoverd) {
      this.WatchListService.addToWatchList(this.moviedetails);
      this.MovieListService.setHovered(this.moviedetails);
    }else{
      this.WatchListService.removeFromWatchList(this.moviedetails);
      this.MovieListService.removeHovered(this.moviedetails);
      this.isHoverd = this.MovieListService.gethoverdmovie(this.moviedetails.id);
      if(this.isHoverd===undefined){
        this.isHoverd=false;
      }
    }
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.WatchListService.removeFromWatchList(this.moviedetails);
    this.MovieListService.removeHovered(this.moviedetails);
    
  }

}
