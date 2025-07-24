import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalQuoteCardComponent } from './motivational-quote-card.component';

describe('DietCardComponent', () => {
  let component: MotivationalQuoteCardComponent;
  let fixture: ComponentFixture<MotivationalQuoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotivationalQuoteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationalQuoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
