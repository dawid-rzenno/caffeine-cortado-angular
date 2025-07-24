import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Dashboard } from "./dashboard";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
	readonly apiUrl = `${environment.apiUrl}/dashboard`;

	constructor(private http: HttpClient) { }

	getDashboard$() {
		return this.http.get<Dashboard>(`${this.apiUrl}`);
	}
}
