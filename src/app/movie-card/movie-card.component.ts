import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MovieListService } from '../movie-list.service';
import { RateComponent } from '../rate/rate.component';



@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [DatePipe ,RouterLink,RateComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  movieService= inject(MovieListService);


  @Input() movie:any;
  @Output() sendToParent = new EventEmitter<number>();
  constructor(private routes: Router) {}

  handle(id :number){

    this.routes.navigate(['/movies-details' ,id]);
  }}
