import { Component, inject, OnInit } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component-abstract.directive";
import { Diet } from "../diet";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DietService } from "../diet.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AsyncPipe, NgForOf, NgTemplateOutlet } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Meal } from "../../meal/meal";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MealTableComponent } from "../../meal/meal-table/meal-table.component";
import { NumberToAdjectivePipe } from "../../shared/number-to-adjective.pipe";
import { MatDialog } from "@angular/material/dialog";

export type DietForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string>,
  description: FormControl<string>,
}

export type DietDetailsForm = DietForm & {
  meals: FormArray<FormControl<Meal>>
}

@Component({
  selector: 'cortado-diet-form',
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
    MealTableComponent,
    NgTemplateOutlet,
    NumberToAdjectivePipe
  ],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends ItemFormComponentAbstract<Diet> implements OnInit {
  readonly mealsFormArray: FormArray<FormControl<Meal>> = new FormArray<FormControl<Meal>>([]);

  readonly formGroup: FormGroup<DietDetailsForm> = new FormGroup<DietDetailsForm>({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    name: new FormControl<string>("", { nonNullable: true }),
    description: new FormControl<string>("", { nonNullable: true }),
    meals: this.mealsFormArray
  });

  readonly defaultFormGroupValue: Partial<Diet> = {
    id: undefined,
    name: "",
    description: "",
    meals: []
  };

  protected readonly matDialog: MatDialog = inject(MatDialog);

  constructor(route: ActivatedRoute, service: DietService) {
    super(route, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.item$.subscribe((details: Diet) => {
      for (let meal of details.meals) {
        this.addNewMeal(meal);
      }
    });
  }

  openDialog(): void {
    // const dialogRef: MatDialogRef<DietMealControlDialogComponent, Meal> = this.matDialog.open(DietMealControlDialogComponent);
    //
    // dialogRef.afterClosed().subscribe((meal: Meal | undefined) => {
    //   if (meal) {
    //     this.addNewMeal(meal);
    //   }
    // });
  }

  protected addNewMeal(meal: Meal): void {
    this.mealsFormArray.push(
      new FormControl<Meal>(meal) as FormControl<Meal>
    )
  }


}
