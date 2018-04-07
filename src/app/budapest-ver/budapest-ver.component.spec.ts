import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestVerComponent } from './budapest-ver.component';

describe('BudapestVerComponent', () => {
  let component: BudapestVerComponent;
  let fixture: ComponentFixture<BudapestVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
