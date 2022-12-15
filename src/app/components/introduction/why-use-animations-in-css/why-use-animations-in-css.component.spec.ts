import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseAnimationsInCssComponent } from './why-use-animations-in-css.component';

describe('WhyUseAnimationsInCssComponent', () => {
  let component: WhyUseAnimationsInCssComponent;
  let fixture: ComponentFixture<WhyUseAnimationsInCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUseAnimationsInCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUseAnimationsInCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
