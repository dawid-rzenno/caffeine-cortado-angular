import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { Training } from "./training";
import { TrainingsService } from "./trainings.service";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-trainings',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, CrudTableComponent],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Training>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: TrainingsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((trainings: Training[]) => {
			this.table.dataSource = trainings;
			this.paginator.length = trainings.length;
		})
	}
}
