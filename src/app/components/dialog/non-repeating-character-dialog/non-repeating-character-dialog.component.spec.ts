import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRepeatingCharacterDialogComponent } from './non-repeating-character-dialog.component';

describe('NonRepeatingCharacterDialogComponent', () => {
  let component: NonRepeatingCharacterDialogComponent;
  let fixture: ComponentFixture<NonRepeatingCharacterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRepeatingCharacterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRepeatingCharacterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
