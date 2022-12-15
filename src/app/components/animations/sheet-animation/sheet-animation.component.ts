import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-sheet-animation',
  templateUrl: './sheet-animation.component.html',
  styleUrls: ['./sheet-animation.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class SheetAnimationComponent {

}
