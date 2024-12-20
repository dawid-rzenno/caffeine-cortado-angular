import { TestBed } from "@angular/core/testing";
import { ResolveFn } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { Ingredient } from "./ingredient";

describe("ingredientResolver", () => {
  const executeResolver: ResolveFn<Ingredient> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      ingredientResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeResolver).toBeTruthy();
  });
});
