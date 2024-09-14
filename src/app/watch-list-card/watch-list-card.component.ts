import { Component, Input } from '@angular/core';
import { WatchListService } from '../watch-list.service';
import { CounterService } from '../counter.service';
import { MovieListService } from '../movie-list.service';
import { DatePipe } from '@angular/common';
import { RateComponent } from '../rate/rate.component';

@Component({
  selector: 'app-watch-list-card',
  standalone: true,
  imports: [DatePipe ,RateComponent],
  templateUrl: './watch-list-card.component.html',
  styleUrl: './watch-list-card.component.css'
})
export class WatchListCardComponent {
  @Input() movie: any;
  counter: number = 0;
  isFavorite: boolean = true
  constructor(private watchListService: WatchListService,private counterService: CounterService, private moviesservice: MovieListService) { }
  ngOnInit(): void {
    this.isFavorite = this.moviesservice.gethoverdmovie(this.movie.id);
    if(this.isFavorite===undefined){
      this.isFavorite=false;
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.watchListService.removeFromWatchList(this.movie);
    this.moviesservice.removeHovered(this.movie);
  }


}
