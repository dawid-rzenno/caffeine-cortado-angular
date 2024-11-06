import { TestBed } from "@angular/core/testing";
import { ResolveFn } from "@angular/router";
import { Beverage } from "./beverage";
import { beveragesResolver } from "./beverages.resolver";
import { PaginatedResponse } from "../shared/models/paginated-response";

describe("beveragesResolver", () => {
  const executeResolver: ResolveFn<PaginatedResponse<Beverage>> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() =>
      beveragesResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeResolver).toBeTruthy();
  });
});
