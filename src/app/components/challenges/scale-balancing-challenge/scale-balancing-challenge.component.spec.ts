import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleBalancingChallengeComponent } from './scale-balancing-challenge.component';

describe('ScaleBalancingChallengeComponent', () => {
  let component: ScaleBalancingChallengeComponent;
  let fixture: ComponentFixture<ScaleBalancingChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleBalancingChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleBalancingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
