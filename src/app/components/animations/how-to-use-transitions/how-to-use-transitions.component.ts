import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-how-to-use-transitions',
  templateUrl: './how-to-use-transitions.component.html',
  styleUrls: ['./how-to-use-transitions.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HowToUseTransitionsComponent {

}
