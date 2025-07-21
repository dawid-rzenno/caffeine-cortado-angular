import { AfterViewInit, Component, inject, Input, ViewChild } from '@angular/core';
import { Meal } from "./meal";
import { MatButtonModule } from "@angular/material/button";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { RouterLink } from "@angular/router";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DietMealsService } from "./diet-meals.service";
import { MatDialog } from "@angular/material/dialog";
import { DietMealsSearchDialogComponent } from "./diet-meals-search-dialog/diet-meals-search-dialog.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: 'app-diet-meals',
	imports: [
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		RouterLink,
		MatIconModule
	],
	templateUrl: './diet-meals.component.html',
	styleUrl: './diet-meals.component.scss'
})
export class DietMealsComponent implements AfterViewInit {
	@Input({ required: true }) dietId!: number;
	@Input({ required: true }) meals!: Meal[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Meal>;

	readonly dialog = inject(MatDialog)

	readonly displayedColumns = ['id', 'name', 'timestamp', 'userId', 'actions'];

	constructor(private service: DietMealsService) {
	}

	ngAfterViewInit(): void {
		this.table.dataSource = this.meals;
		this.paginator.length = this.meals.length;
	}

	openSearchDialog(): void {
		const dialogRef = this.dialog.open(DietMealsSearchDialogComponent, {
			data: { dietId: this.dietId },
		});

		dialogRef.afterClosed().subscribe((meal?: Meal) => {
			if (meal) {
				this.meals.push(meal)
			}
		});
	}

	assign(mealId: number) {
		this.service.assign$(this.dietId, mealId).subscribe()
	}

	unassign(mealId: number) {
		this.service.unassign$(this.dietId, mealId).subscribe()
	}
}
