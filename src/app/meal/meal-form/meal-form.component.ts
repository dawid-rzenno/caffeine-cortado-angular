import { Component, OnInit } from "@angular/core";
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component.abstract";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { Meal, MealPatch } from "../meal";
import { ActivatedRoute } from "@angular/router";
import { MealService } from "../meal.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {
  createSearchResultForm,
  SearchResultForm,
} from "../../ingredient/ingredient-form/ingredient-form.component";
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from "@angular/material/autocomplete";
import { IngredientService } from "../../ingredient/ingredient.service";
import { map, Observable, startWith } from "rxjs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { SearchResult } from "../../shared/models/search-result";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

export type MealForm = {
  id: FormControl<number | undefined>;
  name: FormControl<string>;
};

export type MealDetailsForm = MealForm & {
  rating: FormControl<number>;
  ingredients: FormArray<FormGroup<SearchResultForm>>;
};

export const createMealForm = (meal: Meal) =>
  new FormGroup<MealForm>({
    id: new FormControl<number | undefined>(meal.id, { nonNullable: true }),
    name: new FormControl<string>(meal.name, { nonNullable: true }),
  });

@Component({
  selector: "cortado-meal-form",
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
    MatButtonToggleModule,
    FaIconComponent,
  ],
  templateUrl: "./meal-form.component.html",
  styleUrl: "./meal-form.component.scss",
})
export class MealFormComponent
  extends ItemFormComponentAbstract<Meal, MealPatch>
  implements OnInit
{
  readonly ingredientsFormArray: FormArray<FormGroup<SearchResultForm>> =
    new FormArray<FormGroup<SearchResultForm>>([]);
  readonly ingredients$: Observable<SearchResult[]> =
    this.ingredientsFormArray.valueChanges.pipe(
      startWith(() => this.ingredientsFormArray.getRawValue()),
      map(() => this.ingredientsFormArray.getRawValue()),
    ) as Observable<SearchResult[]>;

  readonly form: FormGroup<MealDetailsForm> = new FormGroup<MealDetailsForm>({
    id: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    name: new FormControl<string>("", { nonNullable: true }),
    rating: new FormControl<number>(2, { nonNullable: true }),
    ingredients: this.ingredientsFormArray,
  });

  readonly defaultFormValue: Partial<Meal> = {
    id: undefined,
    name: "",
    rating: 2,
    ingredients: [],
  };

  readonly ingredientSearchFormControl: FormControl<string> =
    new FormControl<string>("", { nonNullable: true });
  readonly ingredientAutocompleteOptions$: Observable<SearchResult[]> =
    this.createAutocompleteOptions$(
      this.ingredientSearchFormControl,
      this.ingredientService,
    );

  constructor(
    route: ActivatedRoute,
    service: MealService,
    private ingredientService: IngredientService,
  ) {
    super(route, service);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.item$.subscribe((details: Meal) => {
      if (details) {
        for (const ingredient of details.ingredients) {
          this.addNewIngredient(ingredient);
        }
      }
    });
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.addNewIngredient(event.option.value);
    this.ingredientSearchFormControl.reset();
  }

  protected addNewIngredient(ingredient: SearchResult): void {
    this.ingredientsFormArray.push(createSearchResultForm(ingredient));
  }
}
