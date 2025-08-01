import { Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule } from "@angular/router";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { IngredientsService } from "../../../../ingredients/ingredients.service";
import { Ingredient } from "../../../../ingredients/ingredient";
import {
	AssignationDialogComponent,
	AssignationDialogData
} from "../../../../shared/assignation-dialog/assignation-dialog.component.abstract";
import { CreateMealIngredientPayload } from "../meal-ingredients.component";
import { MealIngredientsService } from "../meal-ingredients.service";

@Component({
	selector: 'app-ingredient-ingredients-search-dialog',
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
		MatCheckboxModule,
		ReactiveFormsModule
	],
	templateUrl: './meal-ingredients-search-dialog.component.html',
	styleUrl: './meal-ingredients-search-dialog.component.scss'
})
export class MealIngredientsSearchDialogComponent extends AssignationDialogComponent<Ingredient, CreateMealIngredientPayload> {
	service = inject(MealIngredientsService)
	matDialogRef = inject(MatDialogRef<MealIngredientsSearchDialogComponent>)
	dialogData = inject<AssignationDialogData>(MAT_DIALOG_DATA);
	childService = inject(IngredientsService)

	@ViewChild(MatTable) table!: MatTable<Ingredient>;

	readonly displayedColumns = ['name', 'actions'];

	readonly termControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required });
	readonly globalSearchControl = new FormControl<boolean>(false, { nonNullable: true });

	readonly form = new FormGroup({
		term: this.termControl,
		globalSearch: this.globalSearchControl,
	});

	constructor(destroyRef: DestroyRef) {
		super(destroyRef);
	}
}
