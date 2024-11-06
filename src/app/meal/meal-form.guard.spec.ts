import { CanActivateFn } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { mealFormGuard } from "./meal-form.guard";

describe("mealFormGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => mealFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
