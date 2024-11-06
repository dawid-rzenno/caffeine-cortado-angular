import { TestBed } from "@angular/core/testing";
import { ResolveFn } from "@angular/router";
import { Meal } from "./meal";
import { mealsResolver } from "./meals.resolver";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe("mealsResolver", () => {
  const executeResolver: ResolveFn<PaginatedResponse<Meal>> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() => mealsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeResolver).toBeTruthy();
  });
});
