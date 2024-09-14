import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [

  { path: "movies",
    component: MovieListComponent  ,
    title: "Movies List",
},

{ path: "movies-details/:id",  
  component: MoviDetailsComponent,
  title: "movie Details",    
}


];
