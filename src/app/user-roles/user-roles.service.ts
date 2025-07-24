import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { UserRole } from "../users/user-role";

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
	readonly apiUrl = `${environment.apiUrl}/user-roles`;

	constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<UserRole[]>(`${this.apiUrl}`);
	}

	getById$(id: number) {
		return this.http.get<UserRole>(`${this.apiUrl}/${id}`);
	}

	update$(form: UserRole) {
		return this.http.put<UserRole>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<UserRole>(`${this.apiUrl}/${id}`);
	}
}
