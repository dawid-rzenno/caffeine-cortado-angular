import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { shoppingListResolver } from './shopping-list.resolver';
import { ShoppingList } from "./shopping-list";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { shoppingListsResolver } from "./shopping-lists.resolver";

describe('shoppingListResolver', () => {
  const executeResolver: ResolveFn<PaginatedResponse<ShoppingList>> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => shoppingListsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
