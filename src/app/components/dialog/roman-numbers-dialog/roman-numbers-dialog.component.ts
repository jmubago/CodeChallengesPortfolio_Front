import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-roman-numbers-dialog',
  templateUrl: './roman-numbers-dialog.component.html',
  styleUrls: ['./roman-numbers-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RomanNumbersDialogComponent implements OnInit {

  public title = new FormControl('', [Validators.required]);
  public results: string;
  public loading: boolean;

  constructor(public dialogRef: MatDialogRef<RomanNumbersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private challenge: ChallengesService) { }

  ngOnInit() {
  }

  /**
   * Receives challege results data
   * @param data 
   */
  public getChallenge (data){
    if(!data.text || data.text === " "){
      this.results = 'Please, enter a natural number';
      return;
    }
    this.loading = true;
    let text = data.text;
    this.challenge.romanNumbersChallenge(text)
    .subscribe(item => {
        this.results = item.result;
        this.loading = false;
    })
  }

   /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
