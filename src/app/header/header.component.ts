import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { OmdbService, MovieList } from '../omdb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  showSearchResults: boolean = false;
  searchResults: any[] = [];  
  searchQuery: string = '';

  constructor(private omdbService: OmdbService, private el: ElementRef) {}

  ngOnInit(): void {

  }

  searchMovies(): void {
    if (this.searchQuery) {
      this.omdbService.searchMoviesByTitle(this.searchQuery).subscribe((data: MovieList) => {
        this.searchResults = data.Search.filter(movie => movie.Type === 'movie');
      });
    } else {
      this.searchResults = [];
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    // Verifique se o clique não foi no elemento de pesquisa
    if (!this.el.nativeElement.contains(clickedElement)) {
      this.showSearchResults = false; // Ocultar resultados
    }
  }

}
