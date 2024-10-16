import { Component, OnInit } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component-abstract.directive";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Meal } from "../meal";
import { ActivatedRoute } from "@angular/router";
import { MealService } from "../meal.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { createIngredientForm, IngredientForm } from "../../ingredient/ingredient-form/ingredient-form.component";
import { Ingredient } from "../../ingredient/ingredient";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { IngredientService } from "../../ingredient/ingredient.service";
import { map, Observable, startWith } from "rxjs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

export type MealForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type MealDetailsForm = MealForm & {
  rating: FormControl<number>,
  ingredients: FormArray<FormGroup<IngredientForm>>
}

export const createMealForm = (meal: Meal) => new FormGroup<MealForm>({
  id: new FormControl<number | undefined>(meal.id, { nonNullable: true }),
  name: new FormControl<string>(meal.name, { nonNullable: true }),
  description: new FormControl<string>(meal.description, { nonNullable: true }),
})

@Component({
  selector: 'cortado-meal-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatButtonToggleModule
  ],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.scss'
})
export class MealFormComponent extends ItemFormComponentAbstract<Meal> implements OnInit {
  readonly ingredientsFormArray: FormArray<FormGroup<IngredientForm>> = new FormArray<FormGroup<IngredientForm>>([])
  readonly ingredients$: Observable<Ingredient[]> =
    this.ingredientsFormArray.valueChanges.pipe(
      startWith(() => this.ingredientsFormArray.getRawValue()),
      map(() => this.ingredientsFormArray.getRawValue())
    ) as Observable<Ingredient[]>;

  readonly formGroup: FormGroup<MealDetailsForm> = new FormGroup<MealDetailsForm>({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    name: new FormControl<string>("", { nonNullable: true }),
    description: new FormControl<string>("", { nonNullable: true }),
    rating: new FormControl<number>(2, { nonNullable: true }),
    ingredients: this.ingredientsFormArray,
  });

  readonly defaultFormGroupValue: Partial<Meal> = {
    id: undefined,
    name: "",
    description: "",
    rating: 2,
    ingredients: []
  };

  readonly ingredientSearchFormControl: FormControl<string> = new FormControl<string>('', { nonNullable: true })
  readonly ingredientAutocompleteOptions$: Observable<Ingredient[]> = this.createAutocompleteOptions$(
    this.ingredientSearchFormControl,
    this.ingredientService
  );

  constructor(route: ActivatedRoute, service: MealService, private ingredientService: IngredientService) {
    super(route, service);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.item$.subscribe((details: Meal) => {
      for (let ingredient of details?.ingredients) {
        this.addNewIngredient(ingredient);
      }
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.addNewIngredient(event.option.value);
    this.ingredientSearchFormControl.reset();
  }

  protected addNewIngredient(ingredient: Ingredient): void {
    this.ingredientsFormArray.push(
      createIngredientForm(ingredient)
    )
  }
}
