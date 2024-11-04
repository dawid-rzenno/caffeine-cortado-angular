import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { dietsResolver } from "./diets.resolver";
import { Diet } from "./diet";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe('dietsResolver', () => {
  const executeResolver: ResolveFn<PaginatedResponse<Diet>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => dietsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
