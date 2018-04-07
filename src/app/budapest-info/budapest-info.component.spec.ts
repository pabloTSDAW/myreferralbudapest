import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudapestInfoComponent } from './budapest-info.component';

describe('BudapestInfoComponent', () => {
  let component: BudapestInfoComponent;
  let fixture: ComponentFixture<BudapestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudapestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudapestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
