import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-what-is-transition',
  templateUrl: './what-is-transition.component.html',
  styleUrls: ['./what-is-transition.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WhatIsTransitionComponent {

}
