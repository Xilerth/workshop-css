import { fadeInAnimation } from './../../../animations/fadeInAnimation';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ss-how-to-generate-animations-in-css',
  templateUrl: './how-to-generate-animations-in-css.component.html',
  styleUrls: ['./how-to-generate-animations-in-css.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HowToGenerateAnimationsInCssComponent {
  @Output() public animationType: EventEmitter<number> = new EventEmitter<number>();

  public onClickAnimationType(animationType: number): void {
    this.animationType.emit(animationType);
  }
}
