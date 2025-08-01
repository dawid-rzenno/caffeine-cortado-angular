import { AfterViewInit, Component, DestroyRef, inject, Input, ViewChild } from '@angular/core';
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
import { AssignationComponent } from "../../../shared/assignation/assignation.component.abstract";
import { CreateAssignationPayloadBase } from "../../../shared/assignation/assignation.service.abstract";

export type CreateMealIngredientPayload = CreateAssignationPayloadBase;

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
export class MealIngredientsComponent extends AssignationComponent<Ingredient, CreateMealIngredientPayload> implements AfterViewInit {
	@Input({ required: true }) parentId!: number;
	@Input({ required: true }) children!: Ingredient[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Ingredient>;

	readonly dialog = inject(MatDialog)

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(service: MealIngredientsService, destroyRef: DestroyRef) {
		super(service, destroyRef);
	}

	ngAfterViewInit(): void {
		this.table.dataSource = this.children;
		this.paginator.length = this.children.length;
	}

	getSearchDialogRef() {
		return this.dialog.open(MealIngredientsSearchDialogComponent, this.dialogConfig);
	}
}
