import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ChallengedisplayComponent } from './components/challenges/challengedisplay/challengedisplay.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'challenge',
    component: ChallengedisplayComponent
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
