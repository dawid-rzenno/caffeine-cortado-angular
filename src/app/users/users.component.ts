import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { User } from "./user";
import { UsersService } from "./users.service";
import { AuthService } from "../auth/auth.service";
import { MatBadgeModule } from "@angular/material/badge";

@Component({
	selector: 'app-users',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe, MatBadgeModule],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss'
})
export class UsersComponent implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	@ViewChild(MatTable) table!: MatTable<User>;

	readonly displayedColumns = ['username', 'role', 'timestamp', 'userId', 'actions'];

	constructor(private service: UsersService, private authService: AuthService) {}

	get userId(): number | undefined {
		return this.authService.userId;
	}

	ngAfterViewInit(): void {
		this.service.getAll$().subscribe((users: User[]) => {
			this.table.dataSource = users;
			this.paginator.length = users.length;
		})
	}
}
