import { AfterViewInit, Component, inject, Input, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTable, MatTableModule } from "@angular/material/table";
import { IngredientNutrientsService } from "./ingredient-nutrients.service";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from "@angular/common";
import {
	IngredientNutrientsSearchDialogComponent
} from "./ingredient-nutrients-search-dialog/ingredient-nutrients-search-dialog.component";
import { Nutrient } from "../../../nutrients/nutrient";

@Component({
  selector: 'app-ingredient-nutrients',
  imports: [
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		RouterLink,
		MatIconModule,
		DatePipe
	],
  templateUrl: './ingredient-nutrients.component.html',
  styleUrl: './ingredient-nutrients.component.scss'
})
export class IngredientNutrientsComponent implements AfterViewInit {
	@Input({ required: true }) ingredientId!: number;
	@Input({ required: true }) nutrients!: Nutrient[];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Nutrient>;

	readonly dialog = inject(MatDialog)

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: IngredientNutrientsService) {
	}

	ngAfterViewInit(): void {
		this.table.dataSource = this.nutrients;
		this.paginator.length = this.nutrients.length;
	}

	openSearchDialog(): void {
		const dialogRef = this.dialog.open(
			IngredientNutrientsSearchDialogComponent,
			{
				data: {
					ingredientId: this.ingredientId
				}
			}
		);

		dialogRef.afterClosed().subscribe((nutrient?: Nutrient) => {
			if (nutrient) {
				this.nutrients.push(nutrient)
			}
		});
	}

	assign(nutrientId: number) {
		this.service.assign$(this.ingredientId, nutrientId).subscribe()
	}

	unassign(nutrientId: number) {
		this.service.unassign$(this.ingredientId, nutrientId).subscribe()
	}
}
