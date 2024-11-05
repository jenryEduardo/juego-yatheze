
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceComponent } from './components/dice/dice.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { DiceContainerComponent } from './components/dice-container/dice-container.component';
import { GameControlsComponent } from './components/game-controls/game-controls.component';

const routes: Routes = [
  {path:'game',component:DiceContainerComponent},
  { path: 'dice', component: DiceComponent },
  {path:'terminar',component:GameControlsComponent},
  { path: 'scorecard', component: ScorecardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
