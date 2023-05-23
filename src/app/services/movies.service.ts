import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    baseUrl: string = 'https://www.omdbapi.com/?apikey=4e224d7f';

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(this. baseUrl, {params: {s: searchTerm}});
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(this.baseUrl, {params: {i: imdbID}})
  }
}
