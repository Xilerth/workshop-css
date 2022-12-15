import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-how-to-use-animations',
  templateUrl: './how-to-use-animations.component.html',
  styleUrls: ['./how-to-use-animations.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HowToUseAnimationsComponent {

}
