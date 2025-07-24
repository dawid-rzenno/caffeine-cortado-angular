import { Component, inject, ViewChild } from '@angular/core';
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
import { MatCheckbox } from "@angular/material/checkbox";
import { Meal } from "../../../meal";
import { IngredientsService } from "../../../../ingredients/ingredients.service";
import { Ingredient } from "../../../../ingredients/ingredient";

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
		MatCheckbox,
		ReactiveFormsModule
	],
	templateUrl: './meal-ingredients-search-dialog.component.html',
	styleUrl: './meal-ingredients-search-dialog.component.scss'
})
export class MealIngredientsSearchDialogComponent {
	@ViewChild(MatTable) table!: MatTable<Ingredient>;

	readonly dialogRef = inject(MatDialogRef<MealIngredientsSearchDialogComponent>);
	readonly data = inject<{ meal: Meal }>(MAT_DIALOG_DATA);
	readonly ingredientsService: IngredientsService = inject(IngredientsService);

	readonly displayedColumns = ['name', 'actions'];

	readonly termControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required});
	readonly globalSearchControl = new FormControl<boolean>(false, { nonNullable: true });

	readonly form = new FormGroup({
		term: this.termControl,
		globalSearch: this.globalSearchControl,
	});

	selected?: Ingredient;

	search() {
		if (this.form.invalid) {
			return;
		}

		this.ingredientsService.getAllByTerm$({
			term: this.termControl.value,
			globalSearch: this.globalSearchControl.value
		}).subscribe((ingredients) => {
			this.table.dataSource = ingredients;
		});
	}

	onNoClick() {
		this.dialogRef.close();
	}
}
