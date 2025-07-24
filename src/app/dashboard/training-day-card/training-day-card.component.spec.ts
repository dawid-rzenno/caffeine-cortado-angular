import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDayCardComponent } from './training-day-card.component';

describe('TrainingCardComponent', () => {
  let component: TrainingDayCardComponent;
  let fixture: ComponentFixture<TrainingDayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingDayCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
