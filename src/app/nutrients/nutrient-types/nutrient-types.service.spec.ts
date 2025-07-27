import { TestBed } from '@angular/core/testing';

import { NutrientTypesService } from './nutrient-types.service';

describe('NutrientTypesService', () => {
  let service: NutrientTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrientTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
