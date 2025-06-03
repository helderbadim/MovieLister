import {Component, Input} from '@angular/core';
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MdbRippleModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() id: string ='';
  @Input() title: string ='';
  @Input() description: string ='';
  @Input() year: string ='';
  @Input() poster: string ='';
}

