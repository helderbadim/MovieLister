import { Component } from '@angular/core';
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import {RouterLink} from "@angular/router";
import {routes} from "../../../app.routes";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MdbCollapseModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    protected readonly routes = routes;
}
