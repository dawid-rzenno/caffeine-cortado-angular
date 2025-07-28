import { TestBed } from '@angular/core/testing';

import { MassUnitsService } from './mass-units.service';

describe('MassUnitsService', () => {
  let service: MassUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
