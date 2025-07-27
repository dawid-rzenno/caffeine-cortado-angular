import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Nutrient } from "./nutrient";

@Injectable({
  providedIn: 'root'
})
export class NutrientsService {
	readonly apiUrl = `${environment.apiUrl}/nutrients`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Nutrient[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<Nutrient[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<Nutrient>(`${this.apiUrl}/${id}`);
	}

	create$(form: Nutrient) {
		return this.http.post<Nutrient>(`${this.apiUrl}`, form);
	}

	update$(form: Nutrient) {
		return this.http.put<Nutrient>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<Nutrient>(`${this.apiUrl}/${id}`);
	}
}
