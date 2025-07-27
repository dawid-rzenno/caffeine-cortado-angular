import { Component, inject, ViewChild } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Diet } from "../../../diet";
import { Meal } from "../../../../meals/meal";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { RouterModule } from "@angular/router";
import { MatCheckbox } from "@angular/material/checkbox";
import { MealsService } from "../../../../meals/meals.service";
import { DietMealsService } from "../diet-meals.service";
import { DietMealForm } from "../diet-meal-form";

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
export class DietMealsSearchDialogComponent {
	@ViewChild(MatTable) table!: MatTable<Meal>;

	readonly dialogRef = inject(MatDialogRef<DietMealsSearchDialogComponent>);
	readonly data = inject<{ dietId: number }>(MAT_DIALOG_DATA);
	readonly mealsService = inject(MealsService);
	readonly dietMealsService = inject(DietMealsService);

	readonly displayedColumns = ['name', 'actions'];

	readonly termControl = new FormControl<string>("", { nonNullable: true, validators: Validators.required });
	readonly globalSearchControl = new FormControl<boolean>(false, { nonNullable: true });

	readonly form = new FormGroup({
		term: this.termControl,
		globalSearch: this.globalSearchControl,
	})

	search() {
		if (this.form.invalid) {
			return;
		}

		this.mealsService.getAllByTerm$({
			term: this.termControl.value,
			globalSearch: this.globalSearchControl.value
		}).subscribe((meals) => {
			this.table.dataSource = meals;
		});
	}

	assign(mealId: number) {
		const form: DietMealForm = {
			mealId,
			mealIndex: 1,
			mealDayIndex: 1
		};

		this.dietMealsService.assign$(this.data.dietId, form).subscribe((diet: Diet) => {
			this.dialogRef.close(diet);
		})
	}

	onNoClick() {
		this.dialogRef.close();
	}
}
