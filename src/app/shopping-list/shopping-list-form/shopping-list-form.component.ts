import { Component, OnInit } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component-abstract.directive";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ShoppingList, ShoppingListPatch } from "../shopping-list";
import { ActivatedRoute } from "@angular/router";
import { ShoppingListService } from "../shopping-list.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { createSearchResultForm, SearchResultForm } from "../../ingredient/ingredient-form/ingredient-form.component";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import { map, Observable, startWith } from "rxjs";
import { IngredientService } from "../../ingredient/ingredient.service";
import { SearchResult } from "../../shared/abstracts/item-table-component-abstract.directive";

export type ShoppingListForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type ShoppingListDetailsForm = ShoppingListForm & {
  ingredients: FormArray<FormGroup<SearchResultForm>>
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
export class ShoppingListFormComponent extends ItemFormComponentAbstract<ShoppingList, ShoppingListPatch> implements OnInit {
  readonly ingredientsFormArray: FormArray<FormGroup<SearchResultForm>> = new FormArray<FormGroup<SearchResultForm>>([])
  readonly ingredients$: Observable<SearchResult[]> =
    this.ingredientsFormArray.valueChanges.pipe(
      startWith(() => this.ingredientsFormArray.getRawValue()),
      map(() => this.ingredientsFormArray.getRawValue())
    ) as Observable<SearchResult[]>;

  readonly form: FormGroup<ShoppingListDetailsForm> = new FormGroup<ShoppingListDetailsForm>({
    id: new FormControl<number | undefined>(undefined, {nonNullable: true}),
    name: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
    ingredients: this.ingredientsFormArray,
  })

  readonly defaultFormValue: ShoppingList | undefined;

  readonly ingredientSearchFormControl: FormControl<string> = new FormControl<string>('', {nonNullable: true})
  readonly ingredientAutocompleteOptions$: Observable<SearchResult[]> = this.createAutocompleteOptions$(
    this.ingredientSearchFormControl,
    this.ingredientService
  );

  constructor(route: ActivatedRoute, service: ShoppingListService, private ingredientService: IngredientService) {
    super(route, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.item$.subscribe((details: ShoppingList) => {
      for (let ingredient of details.ingredients) {
        this.addNewIngredient(ingredient);
      }
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.form.controls.ingredients.push(createSearchResultForm(event.option.value))
  }

  protected addNewIngredient(ingredient: SearchResult): void {
    this.ingredientsFormArray.push(
      createSearchResultForm(ingredient)
    )
  }
}
