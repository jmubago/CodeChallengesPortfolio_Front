import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ChallengedisplayComponent } from './components/challenges/challengedisplay/challengedisplay.component';
import { CashMachineChallengeComponent } from './components/challenges/cash-machine-challenge/cash-machine-challenge.component';
import { NonRepeatingCharacterChallengeComponent } from './components/challenges/non-repeating-character-challenge/non-repeating-character-challenge.component';
import { RomanNumbersChallengeComponent } from './components/challenges/roman-numbers-challenge/roman-numbers-challenge.component';
import { ScaleBalancingChallengeComponent } from './components/challenges/scale-balancing-challenge/scale-balancing-challenge.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'challenge',
    component: ChallengedisplayComponent
  },
  {
    path: 'challenge/cashmachine',
    component: CashMachineChallengeComponent
  },
  {
    path: 'challenge/nonrepeatingcharacter',
    component: NonRepeatingCharacterChallengeComponent
  },
  {
    path: 'challenge/romannumbers',
    component: RomanNumbersChallengeComponent
  },
  {
    path: 'challenge/scalebalancing',
    component: ScaleBalancingChallengeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
