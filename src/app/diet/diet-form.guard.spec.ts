import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dietFormGuard } from './diet-form.guard';

describe('dietFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dietFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
