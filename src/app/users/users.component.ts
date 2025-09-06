import { Component } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { AuthService } from "../auth/auth.service";
import { MatBadgeModule } from "@angular/material/badge";
import { CrudTableColumnKeys, CrudTableComponent } from "../shared/crud-table/crud-table.component";
import { CrudTableColumnComponent } from "../shared/crud-table/crud-table-column/crud-table-column.component";

@Component({
	selector: 'app-users',
	imports: [MatTableModule, MatSortModule, MatBadgeModule, CrudTableComponent, CrudTableColumnComponent, CrudTableColumnComponent],
	templateUrl: './users.component.html',
	styleUrl: './users.component.scss'
})
export class UsersComponent {

	readonly DisplayedColumnsKeys = [
		'username',
		'role',
		CrudTableColumnKeys.Timestamp,
		CrudTableColumnKeys.UserId,
		CrudTableColumnKeys.Actions,
	]

	constructor(private authService: AuthService) {}

	get userId(): number | undefined {
		return this.authService.userId;
	}
}
