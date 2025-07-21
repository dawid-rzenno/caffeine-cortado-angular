import { TestBed } from '@angular/core/testing';

import { DietMealsService } from './diet-meals.service';

describe('MealsService', () => {
  let service: DietMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
