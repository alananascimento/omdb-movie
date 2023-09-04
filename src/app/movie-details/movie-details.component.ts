import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieId!: string;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private omdbService: OmdbService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];

      this.omdbService.getMovieDetails(this.movieId).subscribe(data => {
        this.movieDetails = data;
      });
    });
  }

}

