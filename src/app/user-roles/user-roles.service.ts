import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { UserRole } from "../users/user-role";
import { CrudService } from "../shared/crud/crud.service.abstract";

@Injectable({
	providedIn: 'root'
})
export class UserRolesService extends CrudService<UserRole> {
	readonly apiUrl = `${environment.apiUrl}/user-roles`;

	constructor(http: HttpClient) {
		super(http);
	}
}
