import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestSliderComponent } from './budapest-slider.component';

describe('BudapestSliderComponent', () => {
  let component: BudapestSliderComponent;
  let fixture: ComponentFixture<BudapestSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
