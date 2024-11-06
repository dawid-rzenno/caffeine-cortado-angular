import { CanActivateFn } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { ingredientFormGuard } from "./ingredient-form.guard";

describe("ingredientFormGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      ingredientFormGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
