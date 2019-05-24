import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cash-machine-dialog',
  templateUrl: './cash-machine-dialog.component.html',
  styleUrls: ['./cash-machine-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CashMachineDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CashMachineDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

   /**
   * Method for closing the dialog
   */
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
