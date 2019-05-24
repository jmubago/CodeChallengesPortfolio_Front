import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumbersChallengeComponent } from './roman-numbers-challenge.component';

describe('RomanNumbersChallengeComponent', () => {
  let component: RomanNumbersChallengeComponent;
  let fixture: ComponentFixture<RomanNumbersChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanNumbersChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumbersChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
