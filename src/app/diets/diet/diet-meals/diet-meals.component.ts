import { AfterViewInit, Component, DestroyRef, inject, Input, ViewChild } from '@angular/core';
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
import { AssignationComponent } from "../../../shared/assignation/assignation.component.abstract";
import { CreateDietMealPayload } from "./create-diet-meal-payload";
import { Id } from "../../../shared/item-base";

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
export class DietMealsComponent extends AssignationComponent<Meal, CreateDietMealPayload> implements AfterViewInit {

	@Input({ required: true }) parentId!: Id;
	@Input({ required: true }) children!: Meal[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Meal>;

	readonly dialog = inject(MatDialog)
	readonly displayedColumns = ['name', 'mealDayIndex', 'mealIndex', 'timestamp', 'userId', 'actions'];

	constructor(service: DietMealsService, destroyRef: DestroyRef) {
		super(service, destroyRef)
	}

	ngAfterViewInit() {
		this.updateDataSource();
	}

	getSearchDialogRef() {
		return this.dialog.open(DietMealsSearchDialogComponent, this.dialogConfig);
	}
}
