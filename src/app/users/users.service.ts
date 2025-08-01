import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateUserPayload, UpdateUserPayload, User, UserDetails } from "./user";
import { CrudService } from "../shared/crud/crud.service.abstract";

@Injectable({
	providedIn: 'root'
})
export class UsersService extends CrudService<User, UserDetails, CreateUserPayload, UpdateUserPayload> {

	readonly apiUrl = `${environment.apiUrl}/users`;

	constructor(http: HttpClient) {
		super(http);
	}
}
