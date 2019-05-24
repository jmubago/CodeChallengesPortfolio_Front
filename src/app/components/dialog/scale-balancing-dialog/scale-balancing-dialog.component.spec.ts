import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBalancingDialogComponent } from './scale-balancing-dialog.component';

describe('ScaleBalancingDialogComponent', () => {
  let component: ScaleBalancingDialogComponent;
  let fixture: ComponentFixture<ScaleBalancingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBalancingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBalancingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
