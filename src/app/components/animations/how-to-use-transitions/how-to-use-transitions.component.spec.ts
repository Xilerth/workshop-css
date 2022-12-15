import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseTransitionsComponent } from './how-to-use-transitions.component';

describe('HowToUseTransitionsComponent', () => {
  let component: HowToUseTransitionsComponent;
  let fixture: ComponentFixture<HowToUseTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToUseTransitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToUseTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
