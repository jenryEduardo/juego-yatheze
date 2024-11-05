import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() value: number = 0;
  @Input() isLocked: boolean = false;
  @Output() toggleLock = new EventEmitter<void>();

  onToggleLock() {
    this.toggleLock.emit();
  }
}
