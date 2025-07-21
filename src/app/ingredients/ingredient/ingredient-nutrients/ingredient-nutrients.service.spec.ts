import { TestBed } from '@angular/core/testing';

import { IngredientNutrientsService } from './ingredient-nutrients.service';

describe('IngredientNutrientsService', () => {
  let service: IngredientNutrientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientNutrientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
