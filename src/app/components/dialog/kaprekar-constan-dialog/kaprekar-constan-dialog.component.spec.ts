import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaprekarConstanDialogComponent } from './kaprekar-constan-dialog.component';

describe('KaprekarConstanDialogComponent', () => {
  let component: KaprekarConstanDialogComponent;
  let fixture: ComponentFixture<KaprekarConstanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaprekarConstanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaprekarConstanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
