import { Component, OnInit } from '@angular/core';
import { OmdbService, MovieList } from '../omdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actionMovies: any[] = [];
  comedyMovies: any[] = [];
  newMovies: any[] = [];
  searchResults: any[] = [];
  searchQuery: string = '';

  constructor(private omdbService: OmdbService) {}

  ngOnInit(): void {
    this.omdbService.getMoviesByCategory('action').subscribe((data: MovieList) => this.actionMovies = data.Search);
    this.omdbService.getMoviesByCategory('comedy').subscribe((data: MovieList) => this.comedyMovies = data.Search);
    this.omdbService.getNewMovies().subscribe((data: MovieList) => this.newMovies = data.Search);
  }

}

