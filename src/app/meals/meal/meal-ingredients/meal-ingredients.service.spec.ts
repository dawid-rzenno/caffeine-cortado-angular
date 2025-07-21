import { TestBed } from '@angular/core/testing';

import { MealIngredientsService } from './meal-ingredients.service';

describe('MealIngredientsService', () => {
  let service: MealIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
