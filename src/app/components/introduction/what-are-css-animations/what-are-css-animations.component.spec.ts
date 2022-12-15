import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreCssAnimationsComponent } from './what-are-css-animations.component';

describe('WhatAreCssAnimationsComponent', () => {
  let component: WhatAreCssAnimationsComponent;
  let fixture: ComponentFixture<WhatAreCssAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatAreCssAnimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAreCssAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
