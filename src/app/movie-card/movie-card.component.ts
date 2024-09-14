import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MovieListService } from '../movie-list.service';
import { WatchListService } from '../watch-list.service';
import { RateComponent } from "../rate/rate.component";


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DatePipe, RouterLink, RateComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  movieService= inject(MovieListService);
  watchListArray:any[]=[];
  hovered :any[]=[];
  watchListservice= inject(WatchListService);
  isHoverd: boolean = false;

  @Input() movie:any;
  @Output() sendToParent = new EventEmitter<number>();
  constructor(private routes: Router) {}

  handle(id :number){
    this.sendToParent.emit(id);
    this.routes.navigate(['/movies-details' ,id]);
  }
  ngOnInit() {
    this.watchListArray = this.watchListservice.getWatchList();
    this.hovered = this.movieService.getHovered();
    this.isHoverd = this.movieService.gethoverdmovie(this.movie.id);
    if(this.isHoverd===undefined){
      this.isHoverd=false;
    }
  }
  hoverd() {
    this.isHoverd = !this.isHoverd;
    if (this.isHoverd) {
      this.watchListservice.addToWatchList(this.movie);
      this.movieService.setHovered(this.movie);
    }else{
      this.watchListservice.removeFromWatchList(this.movie);
      this.movieService.removeHovered(this.movie);
      this.isHoverd = this.movieService.gethoverdmovie(this.movie.id);
      if(this.isHoverd===undefined){
        this.isHoverd=false;
      }
    }
  }

  floatToIntRound(num: number): number {
    return Math.round(num);
}
  
}
