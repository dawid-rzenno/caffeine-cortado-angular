import { Component, OnInit } from '@angular/core';
import { FormComponentAbstract } from "../../form-component.abstract";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Meal, MealDetails } from "../meal";
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
import { Observable } from "rxjs";

export type MealForm = {
  id: FormControl<string>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type MealDetailsForm = MealForm & {
  ingredients: FormArray<FormGroup<IngredientForm>>
}

export const createMealForm = (meal: Meal) => new FormGroup<MealForm>({
  id: new FormControl<string>(meal.id, {nonNullable: true}),
  name: new FormControl<string>(meal.name, {nonNullable: true}),
  description: new FormControl<string>(meal.description, {nonNullable: true}),
})

@Component({
  selector: 'app-meal-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    AsyncPipe
  ],
  templateUrl: './meal-form.component.html',
  styleUrl: './meal-form.component.scss'
})
export class MealFormComponent extends FormComponentAbstract<MealDetails> implements OnInit {
  readonly ingredientsFormArray: FormArray<FormGroup<IngredientForm>> = new FormArray<FormGroup<IngredientForm>>([])

  readonly formGroup: FormGroup<MealDetailsForm> = new FormGroup<MealDetailsForm>({
    id: new FormControl<string>("", {nonNullable: true}),
    name: new FormControl<string>("", {nonNullable: true}),
    description: new FormControl<string>("", {nonNullable: true}),
    ingredients: this.ingredientsFormArray,
  });

  readonly defaultFormGroupValue: MealDetails = {
    id: "",
    name: "",
    description: "",
    ingredients: []
  };

  readonly ingredientSearchFormControl: FormControl<string> = new FormControl<string>('', {nonNullable: true})
  readonly ingredientAutocompleteOptions$: Observable<Ingredient[]> = this.createAutocompleteOptions$(
    this.ingredientSearchFormControl,
    this.ingredientService
  );

  constructor(route: ActivatedRoute, service: MealService, private ingredientService: IngredientService) {
    super(route, service);
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.details) {
      for (let ingredient of this.details.ingredients) {
        this.ingredientsFormArray.push(createIngredientForm(ingredient))
      }
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.formGroup.controls.ingredients.push(createIngredientForm(event.option.value))
  }
}