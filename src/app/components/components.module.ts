import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceComponent } from './dice/dice.component';
import { DiceContainerComponent } from './dice-container/dice-container.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { GameControlsComponent } from './game-controls/game-controls.component';


@NgModule({
  declarations: [
    DiceComponent,
    DiceContainerComponent,
    ScorecardComponent,
    GameControlsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DiceComponent,
    DiceContainerComponent,
    ScorecardComponent,
    GameControlsComponent
  ]
})
export class ComponentsModule { }
