import { Component } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent {
  scorecard: any; // Cambia 'any' al tipo que necesites para tu scorecard

  constructor(private scoreService: ScoreService, private gameService: GameService) {
    this.scorecard = this.scoreService.getScorecard(); // Mover la inicialización aquí
  }

  markScore(category: string) {
    const diceValues = this.gameService.getDiceValues();
    const score = this.scoreService.calculateScore(diceValues, category);
    this.scoreService.markScore(category, score || 0);
    this.gameService.resetRolls(); // Asegúrate de que esta función esté definida en GameService
  }
}
