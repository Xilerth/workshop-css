import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetAnimationComponent } from './sheet-animation.component';

describe('SheetAnimationComponent', () => {
  let component: SheetAnimationComponent;
  let fixture: ComponentFixture<SheetAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
