import { CanActivateFn } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { workoutFormGuard } from "./workout-form.guard";

describe('workoutFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => workoutFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
