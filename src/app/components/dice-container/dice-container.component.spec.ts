import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceContainerComponent } from './dice-container.component';

describe('DiceContainerComponent', () => {
  let component: DiceContainerComponent;
  let fixture: ComponentFixture<DiceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiceContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
