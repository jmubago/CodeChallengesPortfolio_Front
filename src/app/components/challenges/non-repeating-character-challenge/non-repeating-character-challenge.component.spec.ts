import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRepeatingCharacterChallengeComponent } from './non-repeating-character-challenge.component';

describe('NonRepeatingCharacterChallengeComponent', () => {
  let component: NonRepeatingCharacterChallengeComponent;
  let fixture: ComponentFixture<NonRepeatingCharacterChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRepeatingCharacterChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRepeatingCharacterChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
