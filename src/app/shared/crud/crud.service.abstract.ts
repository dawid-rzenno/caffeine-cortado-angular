import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export type SearchQueryParams = {
	term?: string,
	globalSearch?: boolean
}

export type GetAllQueryParams = SearchQueryParams & {
	sort?: string;
	limit?: number;
	page?: number;
}

export interface IDetailsCrudService<ItemDetails, CreateItemPayload, UpdateItemPayload> {
	apiUrl: string;
	http: HttpClient;

	getById$(id: number): Observable<ItemDetails>;

	create$(form: CreateItemPayload): Observable<ItemDetails>;

	update$(form: UpdateItemPayload): Observable<ItemDetails>;

	delete$(id: number): Observable<void>;
}

export interface ICrudService<Item, ItemDetails = Item, CreateItemPayload = Item, UpdateItemPayload = Item>
	extends IDetailsCrudService<ItemDetails, CreateItemPayload, UpdateItemPayload> {

	getAll$(params: GetAllQueryParams): Observable<Item[]>;
}

export abstract class CrudService<
	Item,
	ItemDetails = Item,
	CreateItemPayload = Item,
	UpdateItemPayload = Item
> implements ICrudService<Item, ItemDetails, CreateItemPayload, UpdateItemPayload> {

	abstract readonly apiUrl: string;

	protected constructor(public http: HttpClient) {
	}

	getAll$(params: GetAllQueryParams = {}) {
		return this.http.get<Item[]>(this.apiUrl, { params });
	}

	getById$(id: number) {
		return this.http.get<ItemDetails>(`${this.apiUrl}/${id}`);
	}

	create$(form: CreateItemPayload) {
		return this.http.post<ItemDetails>(this.apiUrl, form);
	}

	update$(form: UpdateItemPayload) {
		return this.http.put<ItemDetails>(this.apiUrl, form);
	}

	delete$(id: number) {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
