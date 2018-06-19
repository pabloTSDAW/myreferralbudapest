import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosEmpresaComponent } from './puestos-empresa.component';

describe('PuestosEmpresaComponent', () => {
  let component: PuestosEmpresaComponent;
  let fixture: ComponentFixture<PuestosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuestosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
