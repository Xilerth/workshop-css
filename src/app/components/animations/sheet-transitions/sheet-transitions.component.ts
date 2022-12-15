import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-sheet-transitions',
  templateUrl: './sheet-transitions.component.html',
  styleUrls: ['./sheet-transitions.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SheetTransitionsComponent {

}
