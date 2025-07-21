import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Meal } from "./meal";
import { MealsService } from "./meals.service";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButton, RouterLink]
})
export class MealsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Meal>;

  displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: MealsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((meals: Meal[]) => {
			this.table.dataSource = meals;
			this.paginator.length = meals.length;
		})
	}
}
