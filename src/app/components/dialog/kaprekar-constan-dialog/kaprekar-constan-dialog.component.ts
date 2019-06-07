import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-kaprekar-constan-dialog',
  templateUrl: './kaprekar-constan-dialog.component.html',
  styleUrls: ['./kaprekar-constan-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KaprekarConstanDialogComponent implements OnInit {

  public title = new FormControl('', [Validators.required]);
  public results: any;
  public loading: boolean;

  constructor(public dialogRef: MatDialogRef<KaprekarConstanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private challenge: ChallengesService) { }

  ngOnInit() {
  }

  /**
   * Receives challege results data
   * @param data 
   */
  public getChallenge (data){
    this.loading = true;
    let num = data.number;
    let checkNum = num.toString().split("");

    let counts = {};
    checkNum.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    let distinctDigits = Object.keys(counts).length;

    // check if there are at least two different digits, or 4 digits
    if(checkNum.length != 4 || distinctDigits < 2){
      this.loading = false;
      this.results = 'Introduce 4 digits with at least two distinct digits';
    }else{
      this.challenge.kaprekarsConstantChallenge(num)
      .subscribe(item => {
        this.loading = false;
        this.results = 'test';
        this.results = item['result'];
      })
    }
  }

  /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
