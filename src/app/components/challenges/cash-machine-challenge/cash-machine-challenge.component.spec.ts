import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMachineChallengeComponent } from './cash-machine-challenge.component';

describe('CashMachineChallengeComponent', () => {
  let component: CashMachineChallengeComponent;
  let fixture: ComponentFixture<CashMachineChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashMachineChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashMachineChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
