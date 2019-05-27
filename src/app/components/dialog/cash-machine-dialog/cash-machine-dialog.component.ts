import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-cash-machine-dialog',
  templateUrl: './cash-machine-dialog.component.html',
  styleUrls: ['./cash-machine-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CashMachineDialogComponent implements OnInit {

  public title = new FormControl('', [Validators.required]);
  public results: any[] = [];

  constructor(public dialogRef: MatDialogRef<CashMachineDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
     private challenge: ChallengesService) { }

  ngOnInit() {
  }

  /**
   * Receives challege results data
   * @param data 
   */
  public getChallenge (data){
    let pp = data.purchasePrice;
    let ch = data.cash
    this.challenge.cashMachineChallenge(pp, ch)
    .subscribe(item => {
      if(typeof(item.result) === 'number'){
        this.results = (item.result == 1) ? ['Purchase price is higher than cash'] : ['No change needed'];
      }else{
        this.results = Object.values(item['result']);
      }
    })
  }

   /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
