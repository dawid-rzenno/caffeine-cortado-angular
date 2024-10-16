import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { DBItem, GetAllRequestParams } from "../shared/table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(private http: HttpClient) { }

  create(details?: DBItem): Observable<DBItem> {
    const body: Partial<DBItem> = details ? {} : {};

    return this.http.post<DBItem>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<DBItem> {
    return this.http.get<DBItem>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<DBItem>> {
    return this.http.get<PaginatedResponse<DBItem>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<DBItem>) => new PaginatedResponse<DBItem>(paginatedResponse))
    )
  }
}
