import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { AnimationsComponent } from './views/animations/animations.component';
import { ChallengesComponent } from './views/challenges/challenges.component';
import { StepsComponent } from './components/steps/steps.component';
import { WhatAreCssAnimationsComponent } from './components/introduction/what-are-css-animations/what-are-css-animations.component';
import { WhyUseAnimationsInCssComponent } from './components/introduction/why-use-animations-in-css/why-use-animations-in-css.component';
import { HowToGenerateAnimationsInCssComponent } from './components/animations/how-to-generate-animations-in-css/how-to-generate-animations-in-css.component';
import { WhatIsTransitionComponent } from './components/animations/what-is-transition/what-is-transition.component';
import { WhatIsAnimationComponent } from './components/animations/what-is-animation/what-is-animation.component';
import { HowToUseTransitionsComponent } from './components/animations/how-to-use-transitions/how-to-use-transitions.component';
import { HowToUseAnimationsComponent } from './components/animations/how-to-use-animations/how-to-use-animations.component';
import { SheetAnimationComponent } from './components/animations/sheet-animation/sheet-animation.component';
import { SheetTransitionsComponent } from './components/animations/sheet-transitions/sheet-transitions.component';
import { ExercisesCardComponent } from './components/exercises-card/exercises-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroductionComponent,
    AnimationsComponent,
    ChallengesComponent,
    StepsComponent,
    WhatAreCssAnimationsComponent,
    WhyUseAnimationsInCssComponent,
    HowToGenerateAnimationsInCssComponent,
    WhatIsTransitionComponent,
    WhatIsAnimationComponent,
    HowToUseTransitionsComponent,
    HowToUseAnimationsComponent,
    SheetAnimationComponent,
    SheetTransitionsComponent,
    ExercisesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
