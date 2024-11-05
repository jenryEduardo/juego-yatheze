import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-dice-container',
  templateUrl: './dice-container.component.html',
  styleUrls: ['./dice-container.component.css']
})
export class DiceContainerComponent implements OnInit {
  diceValues: number[] = [];
  diceLocks: boolean[] = [];
  rollsLeft: number = 3; // Cambia esto si deseas más tiros

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.initializeDice();
  }

  initializeDice() {
    // Genera 5 dados con valores aleatorios entre 1 y 6
    this.diceValues = Array.from({ length: 5 }, () => this.getRandomDiceValue());
    this.diceLocks = Array(5).fill(false); // Inicializa todos los dados como desbloqueados
  }

  getRandomDiceValue(): number {
    return Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
  }

  rollDice() {
    if (this.rollsLeft > 0) {
      this.diceValues = this.diceValues.map((value, index) =>
        this.diceLocks[index] ? value : this.getRandomDiceValue()
      );
      this.rollsLeft--;
    }
  }

  toggleLock(index: number) {
    this.diceLocks[index] = !this.diceLocks[index]; // Cambia el estado de bloqueo
  }
}
