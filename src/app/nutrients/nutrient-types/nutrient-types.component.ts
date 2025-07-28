import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { NutrientTypesService } from "./nutrient-types.service";
import { NutrientType } from "./nutrient-type";

@Component({
  selector: 'app-nutrient-types',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe],
  templateUrl: './nutrient-types.component.html',
  styleUrl: './nutrient-types.component.scss'
})
export class NutrientTypesComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<NutrientType>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: NutrientTypesService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((nutrients: NutrientType[]) => {
			this.table.dataSource = nutrients;
			this.paginator.length = nutrients.length;
		})
	}
}
