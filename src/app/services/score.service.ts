import { Injectable } from '@angular/core';

interface ScoreCategory {
  name: string;
  score: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scorecard: ScoreCategory[] = [
    { name: 'Ones', score: null },
    { name: 'Twos', score: null },
    { name: 'Threes', score: null },
    { name: 'Fours', score: null },
    { name: 'Fives', score: null },
    { name: 'Sixes', score: null },
    { name: 'Three of a Kind', score: null },
    { name: 'Four of a Kind', score: null },
    { name: 'Full House', score: null },
    { name: 'Small Straight', score: null },
    { name: 'Large Straight', score: null },
    { name: 'Yahtzee', score: null },
    { name: 'Chance', score: null },
  ];

  calculateScore(diceValues: number[], category: string): number | null {
    const counts = Array(7).fill(0);
    diceValues.forEach(value => counts[value]++);

    switch (category) {
      case 'Ones': return counts[1] * 1;
      case 'Twos': return counts[2] * 2;
      case 'Threes': return counts[3] * 3;
      case 'Fours': return counts[4] * 4;
      case 'Fives': return counts[5] * 5;
      case 'Sixes': return counts[6] * 6;
      case 'Three of a Kind': return counts.some(count => count >= 3) ? diceValues.reduce((a, b) => a + b, 0) : 0;
      case 'Four of a Kind': return counts.some(count => count >= 4) ? diceValues.reduce((a, b) => a + b, 0) : 0;
      case 'Full House': return counts.includes(3) && counts.includes(2) ? 25 : 0;
      case 'Small Straight': return this.isSmallStraight(diceValues) ? 30 : 0;
      case 'Large Straight': return this.isLargeStraight(diceValues) ? 40 : 0;
      case 'Yahtzee': return counts.some(count => count === 5) ? 50 : 0;
      case 'Chance': return diceValues.reduce((a, b) => a + b, 0);
      default: return null;
    }
  }

  markScore(category: string, score: number) {
    const categoryEntry = this.scorecard.find(c => c.name === category);
    if (categoryEntry && categoryEntry.score === null) {
      categoryEntry.score = score;
    }
  }

  getScorecard() {
    return this.scorecard;
  }

  // Validaciones de combinaciones específicas
  private isSmallStraight(diceValues: number[]): boolean {
    const uniqueValues = Array.from(new Set(diceValues)).sort();
    return uniqueValues.join('').includes('1234') || uniqueValues.join('').includes('2345') || uniqueValues.join('').includes('3456');
  }

  private isLargeStraight(diceValues: number[]): boolean {
    const uniqueValues = Array.from(new Set(diceValues)).sort();
    return uniqueValues.join('') === '12345' || uniqueValues.join('') === '23456';
  }
}
