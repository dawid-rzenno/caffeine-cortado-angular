import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {
	MAT_DIALOG_DATA,
	MatDialogActions,
	MatDialogClose,
	MatDialogContent,
	MatDialogRef,
	MatDialogTitle
} from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { Diet } from "../../../diet";
import { Meal } from "../meal";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: 'app-diet-meals-search-dialog',
	imports: [
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
		MatIconModule
	],
	templateUrl: './diet-meals-search-dialog.component.html',
	styleUrl: './diet-meals-search-dialog.component.scss'
})
export class DietMealsSearchDialogComponent {
	readonly dialogRef = inject(MatDialogRef<DietMealsSearchDialogComponent>);
	readonly data = inject<{ diet: Diet }>(MAT_DIALOG_DATA);

	keyword: string = "";

	selected?: Meal;

	onNoClick(): void {
		this.dialogRef.close();
	}


}
