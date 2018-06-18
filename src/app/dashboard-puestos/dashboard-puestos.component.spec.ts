import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPuestosComponent } from './dashboard-puestos.component';

describe('DashboardPuestosComponent', () => {
  let component: DashboardPuestosComponent;
  let fixture: ComponentFixture<DashboardPuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
