import { Injectable } from '@angular/core';
import { MassUnit } from "../nutrients/nutrient-types/nutrient-type";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MassUnitsService {
	readonly apiUrl = `${environment.apiUrl}/mass-units`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<MassUnit[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<MassUnit[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<MassUnit>(`${this.apiUrl}/${id}`);
	}

	create$(form: MassUnit) {
		return this.http.post<MassUnit>(`${this.apiUrl}`, form);
	}

	update$(form: MassUnit) {
		return this.http.put<MassUnit>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<MassUnit>(`${this.apiUrl}/${id}`);
	}
}
