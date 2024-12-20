import { TestBed } from "@angular/core/testing";
import { ResolveFn } from "@angular/router";

import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingList } from "./shopping-list";

describe("shoppingListResolver", () => {
  const executeResolver: ResolveFn<ShoppingList[] | ShoppingList> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() =>
      shoppingListResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeResolver).toBeTruthy();
  });
});
