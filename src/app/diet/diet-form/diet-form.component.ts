import { Component, inject, OnInit } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component.abstract";
import { Diet, DietPatch } from "../diet";
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
import { NumberToAdjectivePipe } from "../../shared/pipes/number-to-adjective.pipe";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { MatIconModule } from "@angular/material/icon";
import { NameChangeModalComponent } from "./name-change-modal/name-change-modal.component";
import { filter, switchMap } from "rxjs";
import { NutritionTableComponent } from "../../nutrition-table/nutrition-table.component";
import { DietForm } from "./diet-form";

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
    NumberToAdjectivePipe,
    FaIconComponent,
    MatIconModule,
    NutritionTableComponent
  ],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends ItemFormComponentAbstract<Diet, DietPatch> implements OnInit {
  get mealControls(): FormArray<FormControl<Meal>> {
    return this.form.get('meals') as FormArray<FormControl<Meal>>;
  }

  readonly form: FormGroup<DietForm> = new FormGroup<DietForm>({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    name: new FormControl<string>("", { nonNullable: true }),
    meals: new FormArray<FormControl<Meal>>([])
  });

  defaultFormValue: Diet | undefined;

  protected readonly matDialog: MatDialog = inject(MatDialog);

  constructor(route: ActivatedRoute, service: DietService) {
    super(route, service);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.item$.subscribe((diet: Diet) => {
      this.defaultFormValue = diet;
      for (let meal of diet.meals) {
        this.addNewMeal(meal);
      }
    });
  }

  onNameEditClick(): void {
    const dialogRef: MatDialogRef<NameChangeModalComponent, string> = this.matDialog.open(
      NameChangeModalComponent,
      { data: { name: this.nameControl.value } }
    );


    dialogRef.afterClosed()
      .pipe(
        filter((newName: string | undefined) => Boolean(newName)),
        switchMap((newName: string | undefined) => this.service.patch({
          id: this.idControl.value,
          // @ts-ignore, filter already handles checking if the name is defined
          name: newName
        })),
      )
      .subscribe((response: DietPatch) => {
        if (response.name) {
          this.nameControl.patchValue(response.name);
        }
      });
  }

  protected addNewMeal(meal: Meal): void {
    this.mealControls.push(
      new FormControl<Meal>(meal) as FormControl<Meal>
    )
  }
}
