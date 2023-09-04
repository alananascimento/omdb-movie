import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey = 'c8fb18de';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMoviesByCategory(category: string): Observable<MovieList> {
    return this.http.get<MovieList>(`${this.apiUrl}?s=${category}&apikey=${this.apiKey}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?i=${id}&apikey=${this.apiKey}`);
  }

  getNewMovies(): Observable<MovieList> {
    return this.http.get<MovieList>(`${this.apiUrl}?s=movie&apikey=${this.apiKey}`);
  }

  searchMoviesByTitle(query: string): Observable<MovieList> {
    return this.http.get<MovieList>(`${this.apiUrl}?s=${query}&type=movie&apikey=${this.apiKey}`);
  }
}

export interface MovieList {
  Search: any[];
}

