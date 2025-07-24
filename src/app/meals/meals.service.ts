import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Meal } from "./meal";

@Injectable({
  providedIn: 'root'
})
export class MealsService {
	readonly apiUrl = `${environment.apiUrl}/meals`;

	constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Meal[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<Meal[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<Meal>(`${this.apiUrl}/${id}`);
	}

	create$(form: Meal) {
		return this.http.post<Meal>(`${this.apiUrl}`, form);
	}

	update$(form: Meal) {
		return this.http.put<Meal>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<Meal>(`${this.apiUrl}/${id}`);
	}
}
