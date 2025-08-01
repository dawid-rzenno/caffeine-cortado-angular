import { TestBed } from '@angular/core/testing';

import { AssignationService } from './assignation.service.abstract';

describe('AssignationService', () => {
  let service: AssignationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
