import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit{

  movie:any;
  constructor(private moviesService:MoviesService, private activatedRoute:ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.moviesService.getMovieDetails(params['imdbID']).subscribe(response=>{
        this.movie = response;
      });
    });
  }

  goBack(){
   window.history.back();

  }

}
