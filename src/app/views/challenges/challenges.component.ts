import { fadeInAnimation } from './../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ChallengesComponent {

}
