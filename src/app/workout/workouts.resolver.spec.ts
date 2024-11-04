import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Workout } from "./workout";
import { workoutsResolver } from "./workouts.resolver";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe('workoutsResolver', () => {
  const executeResolver: ResolveFn<PaginatedResponse<Workout>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => workoutsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
