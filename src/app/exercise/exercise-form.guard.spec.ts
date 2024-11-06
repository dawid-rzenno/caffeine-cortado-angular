import { CanActivateFn } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { exerciseFormGuard } from "./exercise-form.guard";

describe("exerciseFormGuard", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => exerciseFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
