import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestAlojamientoComponent } from './budapest-alojamiento.component';

describe('BudapestAlojamientoComponent', () => {
  let component: BudapestAlojamientoComponent;
  let fixture: ComponentFixture<BudapestAlojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestAlojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestAlojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
