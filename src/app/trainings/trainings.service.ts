import { Injectable } from '@angular/core';
import { CreateTrainingPayload, Training, TrainingDetails, UpdateTrainingPayload } from "./training";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CrudService } from "../shared/crud-table/crud.service.abstract";

@Injectable({
	providedIn: 'root'
})
export class TrainingsService extends CrudService<Training, TrainingDetails, CreateTrainingPayload, UpdateTrainingPayload> {
	readonly apiUrl = `${environment.apiUrl}/trainings`;

	constructor(http: HttpClient) {
		super(http);
	}
}
