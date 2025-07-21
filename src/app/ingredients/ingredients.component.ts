import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { IngredientsService } from "./ingredients.service";
import { Ingredient } from "./ingredient";

@Component({
  selector: 'app-ingredients',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Ingredient>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: IngredientsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((ingredients: Ingredient[]) => {
			this.table.dataSource = ingredients;
			this.paginator.length = ingredients.length;
		})
	}
}
