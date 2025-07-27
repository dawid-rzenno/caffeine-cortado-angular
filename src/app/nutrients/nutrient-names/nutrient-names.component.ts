import { Component, ViewChild } from '@angular/core';
import { DatePipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { Nutrient } from "../nutrient";
import { RouterLink } from "@angular/router";
import { NutrientNamesService } from "./nutrient-names.service";

@Component({
  selector: 'app-nutrient-names',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe],
  templateUrl: './nutrient-names.component.html',
  styleUrl: './nutrient-names.component.scss'
})
export class NutrientNamesComponent {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Nutrient>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: NutrientNamesService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((nutrients: Nutrient[]) => {
			this.table.dataSource = nutrients;
			this.paginator.length = nutrients.length;
		})
	}
}
