import { AfterViewInit, Component, DestroyRef, inject, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTable, MatTableModule } from "@angular/material/table";
import { IngredientNutrientsService } from "./ingredient-nutrients.service";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import {
	IngredientNutrientsSearchDialogComponent
} from "./ingredient-nutrients-search-dialog/ingredient-nutrients-search-dialog.component";
import { Nutrient } from "../../../nutrients/nutrient";
import { AssignationComponent } from "../../../shared/assignation/assignation.component.abstract";
import { CreateIngredientNutrientPayload } from "./create-ingredient-nutrient-payload";

@Component({
	selector: 'app-ingredient-nutrients',
	imports: [
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatIconModule,
		DatePipe
	],
	templateUrl: './ingredient-nutrients.component.html',
	styleUrl: './ingredient-nutrients.component.scss'
})
export class IngredientNutrientsComponent
	extends AssignationComponent<Nutrient, CreateIngredientNutrientPayload>
	implements AfterViewInit {

	@Input({ required: true }) parentId!: number;
	@Input({ required: true }) children!: Nutrient[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Nutrient>;

	readonly dialog = inject(MatDialog)
	readonly displayedColumns = ['name', 'amount', 'timestamp', 'userId', 'actions'];

	constructor(service: IngredientNutrientsService, destroyRef: DestroyRef) {
		super(service, destroyRef);
	}

	ngAfterViewInit(): void {
		this.updateDataSource();
	}

	override getSearchDialogRef(): MatDialogRef<any> {
		return this.dialog.open(
			IngredientNutrientsSearchDialogComponent,
			this.dialogConfig
		);
	}
}
