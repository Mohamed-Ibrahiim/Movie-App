import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private movies: any[] = [];
  private hovered: any[] = [];

  MovieName:string ="";
  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0140f12ac0ff7eccb413c13a4a8b09ec');
  }
  // getMovieDetails(id :any) {
  //   return this.http.get('https://api.themoviedb.org/3/movie/${id}?api_key=0140f12ac0ff7eccb413c13a4a8b09ec');
  // }

}
