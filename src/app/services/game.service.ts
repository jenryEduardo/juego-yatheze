import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private diceValues: number[] = [];
  private diceLocks: boolean[] = [];
  private rollsLeft: number = 3;
  private currentTurn: number = 0;

  constructor() {
    this.initializeGame();
  }

  private initializeGame() {
    this.diceValues = Array(5).fill(0);
    this.diceLocks = Array(5).fill(false);
    this.rollsLeft = 3;
    this.currentTurn = 0;
  }

  rollDice(): number[] {
    for (let i = 0; i < this.diceValues.length; i++) {
      if (!this.diceLocks[i]) {
        this.diceValues[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    this.rollsLeft--;
    return this.diceValues;
  }

  getDiceValues(): number[] {
    return this.diceValues;
  }

  getDiceLocks(): boolean[] {
    return this.diceLocks;
  }

  getRollsLeft(): number {
    return this.rollsLeft;
  }

  toggleLock(index: number) {
    this.diceLocks[index] = !this.diceLocks[index];
  }

  endTurn() {
    this.currentTurn++;
    this.rollsLeft = 3;
    this.diceLocks.fill(false);
    console.log(`Turno ${this.currentTurn} terminado`);
  }

  resetGame() {
    this.initializeGame();
    this.currentTurn = 0;
    console.log('Juego reiniciado');
  }

  resetRolls() {
    this.rollsLeft = 3; // Restablece los lanzamientos a 3
  }
}
