import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:'home' },
  {path:"home", component:HomeComponent},
  {path:"movies", component:MovieListComponent},
  {path:"movieDetails/:imdbID", component:MovieDetailsComponent},
  {path:"**", redirectTo:'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
