import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { shoppingListResolver } from './shopping-list.resolver';
import { ShoppingListModel, ShoppingListModel } from "./shopping-list-model";

describe('shoppingListResolver', () => {
  const executeResolver: ResolveFn<ShoppingListModel[] | ShoppingListModel> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => shoppingListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
