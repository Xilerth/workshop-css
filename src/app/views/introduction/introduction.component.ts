import { fadeInAnimation } from './../../animations/fadeInAnimation';
import { WhyUseAnimationsInCssComponent } from './../../components/introduction/why-use-animations-in-css/why-use-animations-in-css.component';
import { WhatAreCssAnimationsComponent } from './../../components/introduction/what-are-css-animations/what-are-css-animations.component';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ss-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class IntroductionComponent {
  public componentsList = [
    WhatAreCssAnimationsComponent,
    WhyUseAnimationsInCssComponent,
  ];
}
