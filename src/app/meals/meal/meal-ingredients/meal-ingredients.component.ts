import { AfterViewInit, Component, inject, Input, ViewChild } from '@angular/core';
import {
	MealIngredientsSearchDialogComponent
} from "./meal-ingredients-search-dialog/meal-ingredients-search-dialog.component";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { MealIngredientsService } from "./meal-ingredients.service";
import { Ingredient } from "../../../ingredients/ingredient";

@Component({
  selector: 'app-meal-ingredients',
  imports: [
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		RouterLink,
		MatIconModule,
		DatePipe
	],
  templateUrl: './meal-ingredients.component.html',
  styleUrl: './meal-ingredients.component.scss'
})
export class MealIngredientsComponent implements AfterViewInit {
	@Input({ required: true }) mealId!: number;
	@Input({ required: true }) ingredients!: Ingredient[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Ingredient>;

	readonly dialog = inject(MatDialog)

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: MealIngredientsService) {
	}

	ngAfterViewInit(): void {
		this.table.dataSource = this.ingredients;
		this.paginator.length = this.ingredients.length;
	}

	openSearchDialog(): void {
		const dialogRef = this.dialog.open(
			MealIngredientsSearchDialogComponent,
			{
				data: {
					mealId: this.mealId
				}
			}
		);

		dialogRef.afterClosed().subscribe((ingredient?: Ingredient) => {
			if (ingredient) {
				this.ingredients.push(ingredient)
			}
		});
	}

	assign(ingredientId: number) {
		this.service.assign$(this.mealId, ingredientId).subscribe()
	}

	unassign(ingredientId: number) {
		this.service.unassign$(this.mealId, ingredientId).subscribe()
	}
}
