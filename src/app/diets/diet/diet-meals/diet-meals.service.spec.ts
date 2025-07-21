import { TestBed } from '@angular/core/testing';

import { DietMealsService } from './diet-meals.service';

describe('DietMealsService', () => {
  let service: DietMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
