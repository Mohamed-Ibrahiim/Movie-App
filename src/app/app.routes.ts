import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviDetailsComponent } from './movi-details/movi-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';



export const routes: Routes = [
    { path: "movies",  
        component: MovieListComponent  ,
        title: "Movies List",
    },
    { path: "movies-details/:id",  
        component: MoviDetailsComponent,
        title: "movie Details",    
    },
    {
        path: "watch-list",
        component:WatchListComponent,
        title: "Watch List",
    },
    {
        path:"movie-Search/:query",
        component: MovieSearchComponent,
        title: "Movie Search",
    },
    { path: "**",
        component: NotFoundComponent,
        title: "Page Not Found",
    }
];
