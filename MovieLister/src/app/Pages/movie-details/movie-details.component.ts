import {Component, Input, OnInit} from '@angular/core';
import { CardService } from '../../services/card.service';
import {NgForOf} from "@angular/common";
import {MovieDetails} from "../../Models/movie.model";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  gotgDetails: MovieDetails | null = null;
  search: string = 'tt3896198';

  @Input() title: string ='';
  @Input() year: string ='';
  @Input() rated: string ='';
  @Input() released: string ='';
  @Input() runtime: string ='';
  @Input() genre: string ='';
  @Input() director: string ='';
  @Input() writer: string ='';
  @Input() actors: string ='';
  @Input() plot: string ='';
  @Input() language: string ='';
  @Input() country: string ='';
  @Input() awards: string ='';
  @Input() poster: string ='';
  @Input() ratings: string ='';
  @Input() metascore: string ='';
  @Input() imdbRating: string ='';
  @Input() imdbVotes: string ='';
  @Input() imdbID: string ='';
  @Input() type: string ='';
  @Input() dvd: string ='';
  @Input() boxOffice: string ='';
  @Input() production: string ='';
  @Input() website: string ='';


 constructor(private activatedRoute: ActivatedRoute, private cardService: CardService) {}

  ngOnInit(): void {
    this.getMovieDetailsByID();
    this.getParams();
  }

  getParams(): void {
    this.activatedRoute.params.subscribe((params: Params | {id:string}):void) => {
      console.log(params.id);
    })
  }
  getMovieDetailsByID(): void {
    this.cardService.getMovieDetails(this.search).subscribe((data: MovieDetails) => {
      console.log(data);
      this.gotgDetails = data;
    });
  }
}
