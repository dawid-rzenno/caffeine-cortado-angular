import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DietsService } from "./diets.service";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { Diet } from "./diet";

@Component({
	selector: 'app-diets',
	templateUrl: './diets.component.html',
	styleUrl: './diets.component.scss',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink]
})
export class DietsComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Diet>;

	readonly displayedColumns = ['id', 'name', 'timestamp', 'userId', 'actions'];

	constructor(private service: DietsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((diets: Diet[]) => {
			this.table.dataSource = diets;
			this.paginator.length = diets.length;
		})
	}
}
