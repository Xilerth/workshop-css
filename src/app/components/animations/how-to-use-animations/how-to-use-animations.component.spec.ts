import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseAnimationsComponent } from './how-to-use-animations.component';

describe('HowToUseAnimationsComponent', () => {
  let component: HowToUseAnimationsComponent;
  let fixture: ComponentFixture<HowToUseAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToUseAnimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToUseAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
