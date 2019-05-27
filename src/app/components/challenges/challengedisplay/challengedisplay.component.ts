import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

import { ChallengesService } from '../../../services/challenges.service';
import { CashMachineDialogComponent } from '../../dialog/cash-machine-dialog/cash-machine-dialog.component';
import { NonRepeatingCharacterDialogComponent } from '../../dialog/non-repeating-character-dialog/non-repeating-character-dialog.component';
import { RomanNumbersDialogComponent } from '../../dialog/roman-numbers-dialog/roman-numbers-dialog.component';
import { ScaleBalancingDialogComponent } from '../../dialog/scale-balancing-dialog/scale-balancing-dialog.component';

@Component({
  selector: 'app-challengedisplay',
  templateUrl: './challengedisplay.component.html',
  styleUrls: ['./challengedisplay.component.css']
})
export class ChallengedisplayComponent implements OnInit {
  public challengeCards: any;

  constructor(private challenge: ChallengesService,
    public dialog: MatDialog,
    private overlay: Overlay) { }

  ngOnInit() {
    this.challengeCards = this.challenge.getChallengeDisplay();
  }

  /**
   * Opens the appropiate dialog
   * @param data card object with properties
   */
  public callDialog(data: any){
    this[data.dialog](data);
  }

  /**
   * Opens cash machine challenge dialog
   * @param data card object with properties
   */
  public openCashMachineDialog(data: any){
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(CashMachineDialogComponent, {
      data: {
        title: data.title,
        description: data.dialogDescription
      },
      autoFocus: false,
      // maxHeight: '90%',
      scrollStrategy
    });
  }

  public openNonRepeatingCharacterDialog(){
    console.log('cash machine dialog');
  }

  public openRomanNumbersDialog(){
    console.log('cash machine dialog');
  }

  public openScaleBalancingDialog(){
    console.log('cash machine dialog');
  }

}
