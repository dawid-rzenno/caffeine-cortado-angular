import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Goal } from "./goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

	readonly apiUrl = `${environment.apiUrl}/goals`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Goal[]>(`${this.apiUrl}`);
	}

	getById$(id: number) {
		return this.http.get<Goal>(`${this.apiUrl}/${id}`);
	}

	create$(form: Goal) {
		return this.http.post<Goal>(`${this.apiUrl}`, form);
	}

	update$(form: Goal) {
		return this.http.put<Goal>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<Goal>(`${this.apiUrl}/${id}`);
	}
}
