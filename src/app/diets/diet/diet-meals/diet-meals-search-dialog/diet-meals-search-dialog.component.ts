import { Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Meal } from "../../../../meals/meal";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";
import { MealsService } from "../../../../meals/meals.service";
import { DietMealsService } from "../diet-meals.service";

import { CreateDietMealPayload } from "../create-diet-meal-payload";
import {
	AssignationDialogComponent,
	AssignationDialogData
} from "../../../../shared/assignation-dialog/assignation-dialog.component.abstract";
import { Id } from "../../../../shared/item-base";

@Component({
	selector: 'app-diet-meals-search-dialog',
	imports: [
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogModule,
		MatIconModule,
		MatPaginatorModule,
		MatTableModule,
		MatSortModule,
		RouterModule,
		MatCheckbox,
		ReactiveFormsModule
	],
	templateUrl: './diet-meals-search-dialog.component.html',
	styleUrl: './diet-meals-search-dialog.component.scss'
})
export class DietMealsSearchDialogComponent extends AssignationDialogComponent<Meal, CreateDietMealPayload> {
	@ViewChild(MatTable) table!: MatTable<Meal>;

	readonly matDialogRef = inject(MatDialogRef<DietMealsSearchDialogComponent>);
	readonly dialogData = inject<AssignationDialogData>(MAT_DIALOG_DATA);
	readonly childService = inject(MealsService);
	readonly service = inject(DietMealsService);

	readonly displayedColumns = ['name', 'actions'];

	readonly termControl =
		new FormControl<string>("", { nonNullable: true, validators: Validators.required });

	readonly globalSearchControl =
		new FormControl<boolean>(false, { nonNullable: true });

	readonly mealDayIndexControl =
		new FormControl<number>(1, { nonNullable: true, validators: Validators.required });

	readonly mealIndexControl =
		new FormControl<number>(1, { nonNullable: true, validators: Validators.required });

	readonly form = new FormGroup({
		term: this.termControl,
		dayIndex: this.mealDayIndexControl,
		indexControl: this.mealIndexControl,
		globalSearch: this.globalSearchControl,
	});

	constructor(destroyRef: DestroyRef) {
		super(destroyRef);
	}

	override createAssignationPayload(childId: Id): CreateDietMealPayload {
		return {
			...super.createAssignationPayload(childId),
			mealIndex: this.mealIndexControl.value,
			mealDayIndex: this.mealDayIndexControl.value
		};
	}
}
