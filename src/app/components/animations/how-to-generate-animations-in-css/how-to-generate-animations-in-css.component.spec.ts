import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGenerateAnimationsInCssComponent } from './how-to-generate-animations-in-css.component';

describe('HowToGenerateAnimationsInCssComponent', () => {
  let component: HowToGenerateAnimationsInCssComponent;
  let fixture: ComponentFixture<HowToGenerateAnimationsInCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToGenerateAnimationsInCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToGenerateAnimationsInCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
