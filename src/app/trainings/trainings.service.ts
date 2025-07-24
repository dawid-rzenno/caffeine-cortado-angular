import { Injectable } from '@angular/core';
import { Training } from "./training";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Goal } from "../goals/goal";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
	readonly apiUrl = `${environment.apiUrl}/trainings`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Training[]>(`${this.apiUrl}`);
	}

	getById$(id: number) {
		return this.http.get<Training>(`${this.apiUrl}/${id}`);
	}

	create$(form: Goal) {
		return this.http.post<Training>(`${this.apiUrl}`, form);
	}

	update$(form: Goal) {
		return this.http.put<Training>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<Training>(`${this.apiUrl}/${id}`);
	}
}
