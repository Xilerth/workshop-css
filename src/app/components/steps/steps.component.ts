import { AfterViewInit, Component, ComponentFactoryResolver, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ss-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements AfterViewInit {

  @Input() componentsList: any;
  @ViewChild('stepContainer', { read: ViewContainerRef })
  public stepContainer: ViewContainerRef | undefined;
  
  private animationTypeSubscription: Subscription | undefined;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
      if (event.key >= '0' && event.key <= '9') {
        this.changeStep(Number(event.key))
      }

      if(event.key === 'ArrowLeft') {
        this.changeStep(this.selectedStep - 1)
      }

      if(event.key === 'ArrowRight') {
        this.changeStep(this.selectedStep + 1)
      }
      
  }

  public selectedStep = 0;

  constructor() {}

  ngAfterViewInit() {
    this.changeStep(this.selectedStep);
  }

  destroy(){
    this.stepContainer?.remove()
    if(this.animationTypeSubscription) {
      this.animationTypeSubscription.unsubscribe();
    }
  }

  changeStep(step: number) {
    if(step < 0 || step > this.componentsList.length - 1) {return};
    this.destroy()
    this.selectedStep = step;
    const component: any = this.stepContainer?.createComponent(this.componentsList[this.selectedStep]);
    console.log(component?.instance);

    if(component && component.instance && (component.instance.animationType ) ) {
     this.animationTypeSubscription =  component.instance.animationType.subscribe((animationType: number) => {
        this.changeStep(animationType);
      });
    }
  }
}
