import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumbersDialogComponent } from './roman-numbers-dialog.component';

describe('RomanNumbersDialogComponent', () => {
  let component: RomanNumbersDialogComponent;
  let fixture: ComponentFixture<RomanNumbersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanNumbersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumbersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
