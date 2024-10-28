import { Component } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component.abstract";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute } from "@angular/router";
import { IngredientService } from "../ingredient.service";
import { Ingredient, IngredientPatch } from "../ingredient";

import { SearchResult } from "../../shared/models/search-result";

export type IngredientForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  price: FormControl<number>,
}

export type IngredientDetailsForm = IngredientForm & {
  calories: FormControl<number>,
  proteins: FormControl<number>,
  carbohydrates: FormControl<number>,
  fats: FormControl<number>
}

export type SearchResultForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
}

export const createSearchResultForm = (searchResult: SearchResult) => new FormGroup<SearchResultForm>({
  id: new FormControl<number | undefined>(searchResult.id, {nonNullable: true}),
  name: new FormControl<string>(searchResult.name, {nonNullable: true}),
})

export const createIngredientForm = (ingredient: Ingredient) => new FormGroup<IngredientForm>({
  id: new FormControl<number | undefined>(ingredient.id, {nonNullable: true}),
  name: new FormControl<string>(ingredient.name, {nonNullable: true}),
  price: new FormControl<number>(ingredient.price, {nonNullable: true}),
});


@Component({
  selector: 'cortado-ingredient-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.scss'
})
export class IngredientFormComponent extends ItemFormComponentAbstract<Ingredient, IngredientPatch> {
  readonly form: FormGroup<IngredientDetailsForm> = new FormGroup<IngredientDetailsForm>({
    id: new FormControl<number | undefined>(undefined, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    price: new FormControl<number>(0, {nonNullable: true}),
    calories: new FormControl<number>(0, {nonNullable: true}),
    proteins: new FormControl<number>(0, {nonNullable: true}),
    carbohydrates: new FormControl<number>(0, {nonNullable: true}),
    fats: new FormControl<number>(0, {nonNullable: true})
  });

  readonly defaultFormValue: Partial<Ingredient> = {
    id: undefined,
    name: "",
    price: 0,
  };

  readonly categoryOptions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  constructor(route: ActivatedRoute, service: IngredientService) {
    super(route, service);
  }
}
