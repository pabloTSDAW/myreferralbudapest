import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmpresasComponent } from './dashboard-empresas.component';

describe('DashboardEmpresasComponent', () => {
  let component: DashboardEmpresasComponent;
  let fixture: ComponentFixture<DashboardEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
