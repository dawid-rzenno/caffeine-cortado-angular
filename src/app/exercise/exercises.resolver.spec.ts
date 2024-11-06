import { TestBed } from "@angular/core/testing";
import { ResolveFn } from "@angular/router";
import { Exercise } from "./exercise";
import { exercisesResolver } from "./exercises.resolver";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe("exercisesResolver", () => {
  const executeResolver: ResolveFn<PaginatedResponse<Exercise>> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() =>
      exercisesResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeResolver).toBeTruthy();
  });
});
