import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-scale-balancing-dialog',
  templateUrl: './scale-balancing-dialog.component.html',
  styleUrls: ['./scale-balancing-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScaleBalancingDialogComponent implements OnInit {

  public title = new FormControl('', [Validators.required]);
  public results: string;

  constructor(public dialogRef: MatDialogRef<ScaleBalancingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private challenge: ChallengesService) { }

  ngOnInit() {
  }

  /**
   * Receives challege results data
   * @param data 
   */
  public getChallenge (data){
    console.log('getChallenge', data);
    let weighScale = [];
    let weights = [];
    weighScale[0] = data.weighScale01;
    weighScale[1] = data.weighScale02;
    weights[0] = (data.weight01 != 0) ? data.weight01 : undefined;
    weights[1] = (data.weight02 != 0) ? data.weight02 : undefined;
    weights[2] = (data.weight03 != 0) ? data.weight03 : undefined;
    weights[3] = (data.weight04 != 0) ? data.weight04 : undefined;
    this.challenge.scaleBalancingChallenge(weighScale, weights)
    .subscribe(item => {
      console.log('result', item);
        this.results = item.result;
    })
  }

   /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
