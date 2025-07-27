import { AfterViewInit, Component, DestroyRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { Meal } from "../../../meals/meal";
import { MatButtonModule } from "@angular/material/button";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { RouterLink } from "@angular/router";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DietMealsService } from "./diet-meals.service";
import { MatDialog } from "@angular/material/dialog";
import { DietMealsSearchDialogComponent } from "./diet-meals-search-dialog/diet-meals-search-dialog.component";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import { Diet } from "../../diet";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
	selector: 'app-diet-meals',
	imports: [
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		RouterLink,
		MatIconModule,
		DatePipe
	],
	templateUrl: './diet-meals.component.html',
	styleUrl: './diet-meals.component.scss'
})
export class DietMealsComponent implements AfterViewInit {
	@Input({ required: true }) diet!: Diet;
	@Output() dietChange = new EventEmitter<Diet>();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Meal>;

	readonly dialog = inject(MatDialog)
	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: DietMealsService, private destroyRef: DestroyRef) {
	}

	ngAfterViewInit(): void {
		this.updateTable(this.diet.meals);
	}

	updateTable(meals: Meal[]) {
		this.table.dataSource = meals;
		this.paginator.length = meals.length;
		this.table.renderRows();
	}

	openSearchDialog(): void {
		const dialogRef = this.dialog.open(
			DietMealsSearchDialogComponent,
			{ data: { dietId: this.diet.id } }
		);

		dialogRef.afterClosed()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((diet?: Diet) => {
				if (diet) {
					this.dietChange.next(diet);
					this.updateTable(diet.meals);
				}
			});
	}

	unassign(dietMealId: number) {
		this.service.unassign$(this.diet.id, dietMealId)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((diet: Diet) => {
				this.dietChange.next(diet);
				this.updateTable(diet.meals);
			});
	}
}
