import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {Movie, MoviesResponse} from "../../../Models/card.model";
import {CardService} from "../../../services/card.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";



@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    FormsModule,
    MdbFormsModule,
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})

/**
 * @class CardsComponent
 * This class represents the cards components
 */

export class CardsComponent implements OnInit {
  cards: Movie[] = [];
  search: string = '';

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
   this.getMovies();
  }

  getMovies() {
    this.cardService
      .getMovies(this.search)
      .subscribe((response:MoviesResponse):void => {
        console.log(response.Search);
        this.cards = response.Search;
      })
  }
}
