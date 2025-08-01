import { Component, DestroyRef, inject, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";
import { NutrientsService } from "../../../../nutrients/nutrients.service";
import { Nutrient } from "../../../../nutrients/nutrient";
import {
	AssignationDialogComponent
} from "../../../../shared/assignation-dialog/assignation-dialog.component.abstract";
import { IngredientNutrientsService } from "../ingredient-nutrients.service";
import { Id } from "../../../../shared/item-base";
import { CreateIngredientNutrientPayload } from "../create-ingredient-nutrient-payload";

@Component({
	selector: 'app-ingredient-nutrients-search-dialog',
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
	templateUrl: './ingredient-nutrients-search-dialog.component.html',
	styleUrl: './ingredient-nutrients-search-dialog.component.scss'
})
export class IngredientNutrientsSearchDialogComponent extends AssignationDialogComponent<Nutrient, CreateIngredientNutrientPayload> {
	@ViewChild(MatTable) table!: MatTable<Nutrient>;

	matDialogRef = inject(MatDialogRef<IngredientNutrientsSearchDialogComponent>)
	dialogData = inject<{ parentId: Id }>(MAT_DIALOG_DATA);
	childService = inject(NutrientsService)
	service = inject(IngredientNutrientsService)

	readonly displayedColumns = ['name', 'actions'];
	readonly termControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required });
	readonly globalSearchControl = new FormControl<boolean>(false, { nonNullable: true });

	readonly form = new FormGroup({
		term: this.termControl,
		globalSearch: this.globalSearchControl,
	})

	constructor(destroyRef: DestroyRef) {
		super(destroyRef);
	}
}
