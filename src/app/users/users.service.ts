import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserForm } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	readonly apiUrl = `${environment.apiUrl}/users`;

	constructor(private http: HttpClient) { }

	getAll$(): Observable<User[]> {
		return this.http.get<User[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<User> {
		return this.http.get<User>(`${this.apiUrl}/${id}`);
	}

	update$(form: UserForm): Observable<User> {
		return this.http.put<User>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<User> {
		return this.http.delete<User>(`${this.apiUrl}/${id}`);
	}
}
