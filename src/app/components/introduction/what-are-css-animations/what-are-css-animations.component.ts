import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-what-are-css-animations',
  templateUrl: './what-are-css-animations.component.html',
  styleUrls: ['./what-are-css-animations.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WhatAreCssAnimationsComponent {

}
