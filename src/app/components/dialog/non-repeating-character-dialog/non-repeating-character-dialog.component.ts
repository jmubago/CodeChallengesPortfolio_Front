import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ChallengesService } from '../../../services/challenges.service';

@Component({
  selector: 'app-non-repeating-character-dialog',
  templateUrl: './non-repeating-character-dialog.component.html',
  styleUrls: ['./non-repeating-character-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NonRepeatingCharacterDialogComponent implements OnInit {

  public title = new FormControl('', [Validators.required]);
  public results: any[] = [];
  public loading: boolean;

  constructor(public dialogRef: MatDialogRef<NonRepeatingCharacterDialogComponent>,
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
      this.results = ['Please, enter at least one character'];
      return;
    }
    this.loading = true;
    let text = data.text;
    this.challenge.nonRepeatingCharacter(text)
    .subscribe(item => {
      if(!item.result){
        this.results = ['There are no non repetitive characters'];
        this.loading = false;
      }else{
        this.results = Object.values(item['result']);
        this.loading = false;
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
