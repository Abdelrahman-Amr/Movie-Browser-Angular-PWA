import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{

  movies:Movie[]=[];
  isLoading=false;
  constructor(private moviesService:MoviesService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.isLoading = true;
      this.moviesService.searchMovies(params['movieTitle']).subscribe(response=>{
        this.movies = response.Search;
        console.log(this.movies);
        this.isLoading = false;
      }, error=>{
        console.log("error",this.movies);

        this.isLoading = false;
        this.movies=[];
      });
    });
  }

  protected readonly Movie = Movie;
}
