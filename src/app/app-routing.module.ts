import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  { path: 'challenges', component: ChallengesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-challenge', component: AddChallengeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
