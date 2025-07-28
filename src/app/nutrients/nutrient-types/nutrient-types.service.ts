import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { NutrientType } from "./nutrient-type";

@Injectable({
  providedIn: 'root'
})
export class NutrientTypesService {
	readonly apiUrl = `${environment.apiUrl}/nutrient-types`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<NutrientType[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<NutrientType[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<NutrientType>(`${this.apiUrl}/${id}`);
	}

	create$(form: NutrientType) {
		return this.http.post<NutrientType>(`${this.apiUrl}`, form);
	}

	update$(form: NutrientType) {
		return this.http.put<NutrientType>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<NutrientType>(`${this.apiUrl}/${id}`);
	}
}
