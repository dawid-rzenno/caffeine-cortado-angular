import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Goal } from "./goal";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { GoalsService } from "./goals.service";

@Component({
  selector: 'app-goals',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<Goal>;

	readonly displayedColumns = ['name', 'timestamp', 'userId', 'actions'];

	constructor(private service: GoalsService) {}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((goals: Goal[]) => {
			this.table.dataSource = goals;
			this.paginator.length = goals.length;
		})
	}
}
