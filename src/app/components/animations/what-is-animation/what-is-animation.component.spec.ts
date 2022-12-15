import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAnimationComponent } from './what-is-animation.component';

describe('WhatIsAnimationComponent', () => {
  let component: WhatIsAnimationComponent;
  let fixture: ComponentFixture<WhatIsAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
