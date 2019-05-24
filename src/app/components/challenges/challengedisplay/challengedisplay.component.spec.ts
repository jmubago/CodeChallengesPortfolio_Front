import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengedisplayComponent } from './challengedisplay.component';

describe('ChallengedisplayComponent', () => {
  let component: ChallengedisplayComponent;
  let fixture: ComponentFixture<ChallengedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
