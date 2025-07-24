import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietDayCardComponent } from './diet-day-card.component';

describe('DietCardComponent', () => {
  let component: DietDayCardComponent;
  let fixture: ComponentFixture<DietDayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietDayCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
