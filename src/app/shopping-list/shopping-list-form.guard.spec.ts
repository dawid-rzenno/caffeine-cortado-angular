import { CanActivateFn } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { shoppingListFormGuard } from "./shopping-list-form.guard";

describe("shoppingListFormGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      shoppingListFormGuard(...guardParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
