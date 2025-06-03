import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/home/home.component";
import {MovieDetailsComponent} from "./Pages/movie-details/movie-details.component";
import {Component} from "@angular/core";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  template: `/movie-details.component.html`,
  styleURL: './movie-details.component.scss'
})

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'moviedetails/:id', component: MovieDetailsComponent},
];
