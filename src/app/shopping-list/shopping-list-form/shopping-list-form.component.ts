import { Component, OnInit } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component-abstract.directive";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ShoppingListModel } from "../shopping-list-model";
import { ActivatedRoute } from "@angular/router";
import { ShoppingListService } from "../shopping-list.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { createIngredientForm, IngredientForm } from "../../ingredient/ingredient-form/ingredient-form.component";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import { map, Observable, startWith } from "rxjs";
import { Ingredient } from "../../ingredient/ingredient";
import { IngredientService } from "../../ingredient/ingredient.service";

export type ShoppingListForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type ShoppingListDetailsForm = ShoppingListForm & {
  ingredients: FormArray<FormGroup<IngredientForm>>
}

@Component({
  selector: 'cortado-shopping-list-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
  ],
  templateUrl: './shopping-list-form.component.html',
  styleUrl: './shopping-list-form.component.scss'
})
export class ShoppingListFormComponent extends ItemFormComponentAbstract<ShoppingListModel> implements OnInit {
  readonly ingredientsFormArray: FormArray<FormGroup<IngredientForm>> = new FormArray<FormGroup<IngredientForm>>([])
  readonly ingredients$: Observable<Ingredient[]> =
    this.ingredientsFormArray.valueChanges.pipe(
      startWith(() => this.ingredientsFormArray.getRawValue()),
      map(() => this.ingredientsFormArray.getRawValue())
    ) as Observable<Ingredient[]>;

  readonly formGroup: FormGroup<ShoppingListDetailsForm> = new FormGroup<ShoppingListDetailsForm>({
    id: new FormControl<number | undefined>(undefined, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: this.ingredientsFormArray,
  })

  readonly defaultFormGroupValue: Partial<ShoppingListModel> = {
    id: undefined,
    name: "",
    description: "",
    ingredients: []
  };

  readonly ingredientSearchFormControl: FormControl<string> = new FormControl<string>('', {nonNullable: true})
  readonly ingredientAutocompleteOptions$: Observable<Ingredient[]> = this.createAutocompleteOptions$(
    this.ingredientSearchFormControl,
    this.ingredientService
  );

  constructor(route: ActivatedRoute, service: ShoppingListService, private ingredientService: IngredientService) {
    super(route, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.item$.subscribe((details: ShoppingListModel) => {
      for (let ingredient of details.ingredients) {
        this.addNewIngredient(ingredient);
      }
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.formGroup.controls.ingredients.push(createIngredientForm(event.option.value))
  }

  protected addNewIngredient(ingredient: Ingredient): void {
    this.ingredientsFormArray.push(
      createIngredientForm(ingredient)
    )
  }
}
