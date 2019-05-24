import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,
  MatTooltipModule,
  MatGridListModule,
  MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChallengedisplayComponent } from './components/challenges/challengedisplay/challengedisplay.component';
import { CashMachineChallengeComponent } from './components/challenges/cash-machine-challenge/cash-machine-challenge.component';
import { NonRepeatingCharacterChallengeComponent } from './components/challenges/non-repeating-character-challenge/non-repeating-character-challenge.component';
import { RomanNumbersChallengeComponent } from './components/challenges/roman-numbers-challenge/roman-numbers-challenge.component';
import { ScaleBalancingChallengeComponent } from './components/challenges/scale-balancing-challenge/scale-balancing-challenge.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChallengedisplayComponent,
    CashMachineChallengeComponent,
    NonRepeatingCharacterChallengeComponent,
    RomanNumbersChallengeComponent,
    ScaleBalancingChallengeComponent,
    AboutComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
