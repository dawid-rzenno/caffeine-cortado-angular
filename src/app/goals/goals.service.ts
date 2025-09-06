import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CreateGoalPayload, Goal, GoalDetails, UpdateGoalPayload } from "./goal";
import { CrudService } from "../shared/crud-table/crud.service.abstract";

@Injectable({
  providedIn: 'root'
})
export class GoalsService extends CrudService<Goal, GoalDetails, CreateGoalPayload, UpdateGoalPayload> {
	readonly apiUrl = `${environment.apiUrl}/goals`;

  constructor(http: HttpClient) {
		super(http);
	}
}
