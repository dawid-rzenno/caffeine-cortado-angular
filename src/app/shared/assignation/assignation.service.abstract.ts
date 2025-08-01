import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Id } from "../item-base";
import { Observable } from "rxjs";

export type CreateAssignationPayloadBase = {
	childId: Id;
}

export interface IAssignationService<Child, CreateAssignationPayload
	extends CreateAssignationPayloadBase> {

	http: HttpClient;
	parentUrlSegment: string;
	childUrlSegment: string;

	assign$(parentId: number, form: CreateAssignationPayload): Observable<Child>;

	unassign$(parentId: number, assignationId: number): Observable<void>;
}

export abstract class AssignationService<Child, CreateAssignationPayload
	extends CreateAssignationPayloadBase>
	implements IAssignationService<Child, CreateAssignationPayload> {

	protected constructor(
		public http: HttpClient,
		public parentUrlSegment: string,
		public childUrlSegment: string
	) {
	}

	assign$(parentId: number, form: CreateAssignationPayload) {
		return this.http.post<Child>(
			`${environment.apiUrl}/${this.parentUrlSegment}/${parentId}/${this.childUrlSegment}`,
			form
		);
	}

	unassign$(parentId: number, assignationId: number) {
		return this.http.delete<void>(
			`${environment.apiUrl}/${this.parentUrlSegment}/${parentId}/${this.childUrlSegment}/${assignationId}`
		);
	}
}
