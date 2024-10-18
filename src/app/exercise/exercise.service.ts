import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { IdentifiedItem, GetAllRequestParams } from "../shared/item-table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(private http: HttpClient) { }

  create(details?: IdentifiedItem): Observable<IdentifiedItem> {
    const body: Partial<IdentifiedItem> = details ? {} : {};

    return this.http.post<IdentifiedItem>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<IdentifiedItem> {
    return this.http.get<IdentifiedItem>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<IdentifiedItem>> {
    return this.http.get<PaginatedResponse<IdentifiedItem>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<IdentifiedItem>) => new PaginatedResponse<IdentifiedItem>(paginatedResponse))
    )
  }
}
