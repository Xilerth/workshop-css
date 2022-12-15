import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-what-is-animation',
  templateUrl: './what-is-animation.component.html',
  styleUrls: ['./what-is-animation.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WhatIsAnimationComponent {

}
