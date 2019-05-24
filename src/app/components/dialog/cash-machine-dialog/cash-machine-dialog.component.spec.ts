import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashMachineDialogComponent } from './cash-machine-dialog.component';

describe('CashMachineDialogComponent', () => {
  let component: CashMachineDialogComponent;
  let fixture: ComponentFixture<CashMachineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashMachineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashMachineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
