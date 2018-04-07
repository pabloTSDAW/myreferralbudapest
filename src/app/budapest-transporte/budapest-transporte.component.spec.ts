import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestTransporteComponent } from './budapest-transporte.component';

describe('BudapestTransporteComponent', () => {
  let component: BudapestTransporteComponent;
  let fixture: ComponentFixture<BudapestTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
