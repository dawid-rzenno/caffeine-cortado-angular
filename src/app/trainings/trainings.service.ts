import { Injectable } from '@angular/core';
import { Training } from "./training";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Goal } from "../goals/goal";

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
	readonly apiUrl = `${environment.apiUrl}/trainings`;

  constructor(private http: HttpClient) { }

	getAll$(): Observable<Training[]> {
		return this.http.get<Training[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Training> {
		return this.http.get<Training>(`${this.apiUrl}/${id}`);
	}

	create$(form: Goal): Observable<Training> {
		return this.http.post<Training>(`${this.apiUrl}`, form);
	}

	update$(form: Goal): Observable<Training> {
		return this.http.put<Training>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<Training> {
		return this.http.delete<Training>(`${this.apiUrl}/${id}`);
	}
}
