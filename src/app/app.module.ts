import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,
  MatTooltipModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatExpansionModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChallengedisplayComponent } from './components/challenges/challengedisplay/challengedisplay.component';
import { AboutComponent } from './components/about/about.component';
import { CashMachineDialogComponent } from './components/dialog/cash-machine-dialog/cash-machine-dialog.component';
import { NonRepeatingCharacterDialogComponent } from './components/dialog/non-repeating-character-dialog/non-repeating-character-dialog.component';
import { RomanNumbersDialogComponent } from './components/dialog/roman-numbers-dialog/roman-numbers-dialog.component';
import { ScaleBalancingDialogComponent } from './components/dialog/scale-balancing-dialog/scale-balancing-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChallengedisplayComponent,
    AboutComponent,
    CashMachineDialogComponent,
    NonRepeatingCharacterDialogComponent,
    RomanNumbersDialogComponent,
    ScaleBalancingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CashMachineDialogComponent,
    NonRepeatingCharacterDialogComponent,
    RomanNumbersDialogComponent,
    ScaleBalancingDialogComponent
  ]
})
export class AppModule { }
