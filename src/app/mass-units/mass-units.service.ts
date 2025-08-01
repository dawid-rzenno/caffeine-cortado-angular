import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CrudService } from "../shared/crud/crud.service.abstract";
import { CreateMassUnitPayload, MassUnit, MassUnitDetails, UpdateMassUnitPayload } from "./mass-unit";

@Injectable({
  providedIn: 'root'
})
export class MassUnitsService extends CrudService<MassUnit, MassUnitDetails, CreateMassUnitPayload, UpdateMassUnitPayload> {
	readonly apiUrl = `${environment.apiUrl}/mass-units`;

  constructor(http: HttpClient) {
		super(http);
	}
}
