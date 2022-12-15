import { SheetAnimationComponent } from './../../components/animations/sheet-animation/sheet-animation.component';
import { HowToUseAnimationsComponent } from './../../components/animations/how-to-use-animations/how-to-use-animations.component';
import { WhatIsAnimationComponent } from './../../components/animations/what-is-animation/what-is-animation.component';
import { SheetTransitionsComponent } from './../../components/animations/sheet-transitions/sheet-transitions.component';
import { HowToUseTransitionsComponent } from './../../components/animations/how-to-use-transitions/how-to-use-transitions.component';
import { WhatIsTransitionComponent } from './../../components/animations/what-is-transition/what-is-transition.component';
import { HowToGenerateAnimationsInCssComponent } from './../../components/animations/how-to-generate-animations-in-css/how-to-generate-animations-in-css.component';
import { fadeInAnimation } from './../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AnimationsComponent {
  public componentsList = [
    HowToGenerateAnimationsInCssComponent,
    WhatIsTransitionComponent,
    HowToUseTransitionsComponent,
    SheetTransitionsComponent,
    WhatIsAnimationComponent,
    HowToUseAnimationsComponent,
    SheetAnimationComponent
  ];
}
