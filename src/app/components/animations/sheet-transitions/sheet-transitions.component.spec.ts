import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetTransitionsComponent } from './sheet-transitions.component';

describe('SheetTransitionsComponent', () => {
  let component: SheetTransitionsComponent;
  let fixture: ComponentFixture<SheetTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetTransitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
