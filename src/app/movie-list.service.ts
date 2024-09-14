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

  getMovieDetails(id :any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0140f12ac0ff7eccb413c13a4a8b09ec`);
  }
  getSearchedMovie() {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=0140f12ac0ff7eccb413c13a4a8b09ec&query=${this.MovieName}`);
  }
  getSearchResult(MovieName :any){
    this.MovieName = MovieName ;
  }

  getSimilarMovies(id :any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=0140f12ac0ff7eccb413c13a4a8b09ec`);
  }
 addToWatchListArray(data: any) {
  this.movies.push(data);
  this.hovered.push({
    id:data.id,
    hover:true
  });
 }
 getMovie() {
  return this.movies;
 }
 getHovered() {
  return this.hovered;
 }
 setHovered(data: any) {
  this.hovered.push({
    id:data.id,
    hover:true
  });
 }
 removeHovered(data: any) {
  this.hovered = this.hovered.filter(movie => movie.id !== data.id);
 }
 gethoverdmovie(id: number) {
  return this.hovered.find(movie => movie.id === id);
 }
}
