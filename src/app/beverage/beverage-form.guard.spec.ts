import { TestBed } from "@angular/core/testing";
import { CanActivateFn } from "@angular/router";

import { beverageFormGuard } from "./beverage-form.guard";

describe("beverageFormGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => beverageFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
