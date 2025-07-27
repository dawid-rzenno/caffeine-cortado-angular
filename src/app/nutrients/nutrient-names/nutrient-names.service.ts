import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { NutrientName } from "./nutrient-name";

@Injectable({
  providedIn: 'root'
})
export class NutrientNamesService {
	readonly apiUrl = `${environment.apiUrl}/nutrients/names`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<NutrientName[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<NutrientName[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<NutrientName>(`${this.apiUrl}/${id}`);
	}

	create$(form: NutrientName) {
		return this.http.post<NutrientName>(`${this.apiUrl}`, form);
	}

	update$(form: NutrientName) {
		return this.http.put<NutrientName>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<NutrientName>(`${this.apiUrl}/${id}`);
	}
}
