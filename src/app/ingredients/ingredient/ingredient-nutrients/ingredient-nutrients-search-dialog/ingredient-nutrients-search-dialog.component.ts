import { Component, inject, ViewChild } from '@angular/core';
import { Nutrient } from "../../../ingredients.service";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Ingredient } from "../../../ingredient";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";
import { NutrientsService } from "../../../nutrients.service";

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
export class IngredientNutrientsSearchDialogComponent {
	@ViewChild(MatTable) table!: MatTable<Nutrient>;

	readonly dialogRef = inject(MatDialogRef<IngredientNutrientsSearchDialogComponent>);
	readonly data = inject<{ ingredient: Ingredient }>(MAT_DIALOG_DATA);
	readonly nutrientsService = inject(NutrientsService);

	readonly displayedColumns = ['name', 'actions'];

	readonly termControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required});
	readonly globalSearchControl = new FormControl<boolean>(false, { nonNullable: true });

	readonly form = new FormGroup({
		term: this.termControl,
		globalSearch: this.globalSearchControl,
	})

	selected?: Nutrient;

	search() {
		if (this.form.invalid) {
			return;
		}

		this.nutrientsService.getAllByTerm$({
			term: this.termControl.value,
			globalSearch: this.globalSearchControl.value
		}).subscribe((nutrients) => {
			this.table.dataSource = nutrients;
		});
	}

	onNoClick() {
		this.dialogRef.close();
	}
}
