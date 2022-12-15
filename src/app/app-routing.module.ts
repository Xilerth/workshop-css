import { ChallengesComponent } from './views/challenges/challenges.component';
import { AnimationsComponent } from './views/animations/animations.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'animations', component: AnimationsComponent},
  {path: 'challenges', component: ChallengesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
