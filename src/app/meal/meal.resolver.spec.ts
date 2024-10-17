import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { mealResolver } from './meal.resolver';
import { MealModel, MealModel } from "./meal.model";

describe('mealResolver', () => {
  const executeResolver: ResolveFn<MealModel[] | MealModel> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => mealResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
