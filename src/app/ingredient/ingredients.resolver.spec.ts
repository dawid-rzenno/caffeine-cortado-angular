import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Ingredient } from "./ingredient";
import { ingredientsResolver } from "./ingredients.resolver";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe('ingredientsResolver', () => {
  const executeResolver: ResolveFn<PaginatedResponse<Ingredient>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => ingredientsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
