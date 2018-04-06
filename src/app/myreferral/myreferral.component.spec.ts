import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreferralComponent } from './myreferral.component';

describe('MyreferralComponent', () => {
  let component: MyreferralComponent;
  let fixture: ComponentFixture<MyreferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
