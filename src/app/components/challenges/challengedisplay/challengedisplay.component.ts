import { Component, OnInit } from '@angular/core';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-challengedisplay',
  templateUrl: './challengedisplay.component.html',
  styleUrls: ['./challengedisplay.component.css']
})
export class ChallengedisplayComponent implements OnInit {
  public challengeCards: any;

  constructor(private challenge: ChallengesService) { }

  ngOnInit() {
    this.challengeCards = this.challenge.getChallengeDisplay();
    console.log(typeof(this.challengeCards), this.challengeCards);
  }


}
