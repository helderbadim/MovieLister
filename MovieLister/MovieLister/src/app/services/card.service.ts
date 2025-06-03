import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MoviesResponse} from "../Models/card.model";
import {MovieDetails} from "../Models/movie.model";



@Injectable({
  providedIn: 'root'
})
export class CardService {

  private domain: string = 'http://www.omdbapi.com';
  private apiKey: string = '61e7e258';

  /**
   * Constructor
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * @returns Observable<MoviesResponse>
   * @param search
   */

  getMovies(search: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.domain}/?apikey=${this.apiKey}&s=${search}`)
  };

  getMovieDetails(search: string): Observable<MovieDetails> {  // ✅ Correct type
    return this.http.get<MovieDetails>(`${this.domain}/?apikey=${this.apiKey}&i=${search}`);
  }

}
