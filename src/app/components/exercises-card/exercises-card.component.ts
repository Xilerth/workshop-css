import { Component, Input } from '@angular/core';

@Component({
  selector: 'ss-exercises-card',
  templateUrl: './exercises-card.component.html',
  styleUrls: ['./exercises-card.component.scss'],
})
export class ExercisesCardComponent {
  @Input() image: string | undefined;
  @Input() title: string | undefined;
  @Input() link: string | undefined;

  navigate(link?: string): void {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }
}
