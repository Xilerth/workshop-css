import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsTransitionComponent } from './what-is-transition.component';

describe('WhatIsTransitionComponent', () => {
  let component: WhatIsTransitionComponent;
  let fixture: ComponentFixture<WhatIsTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsTransitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
