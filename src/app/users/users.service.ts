import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { User, UserForm } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	readonly apiUrl = `${environment.apiUrl}/users`;

	constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<User[]>(`${this.apiUrl}`);
	}

	getById$(id: number) {
		return this.http.get<User>(`${this.apiUrl}/${id}`);
	}

	update$(form: UserForm) {
		return this.http.put<User>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<User>(`${this.apiUrl}/${id}`);
	}
}
