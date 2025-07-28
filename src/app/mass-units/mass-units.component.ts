import { Component, ViewChild } from '@angular/core';
import { MassUnit } from "../nutrients/nutrient-types/nutrient-type";
import { MassUnitsService } from "./mass-units.service";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-mass-units',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe],
  templateUrl: './mass-units.component.html',
  styleUrl: './mass-units.component.scss'
})
export class MassUnitsComponent {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<MassUnit>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: MassUnitsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((massUnits: MassUnit[]) => {
			this.table.dataSource = massUnits;
			this.paginator.length = massUnits.length;
		})
	}
}
