import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-why-use-animations-in-css',
  templateUrl: './why-use-animations-in-css.component.html',
  styleUrls: ['./why-use-animations-in-css.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WhyUseAnimationsInCssComponent {

}
