import { TestBed } from '@angular/core/testing';

import { NutrientNamesService } from './nutrient-names.service';

describe('NutrientNamesService', () => {
  let service: NutrientNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrientNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
