import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { GetAllRequestParams } from "../shared/table-component-abstract.directive";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/workout`;

  constructor(private http: HttpClient) { }

  create(details?: unknown): Observable<unknown> {
    const body: Partial<unknown> = details ? {} : {};

    return this.http.post<unknown>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<unknown> {
    return this.http.get<unknown>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<unknown>> {
    return this.http.get<PaginatedResponse<unknown>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<unknown>) => new PaginatedResponse<unknown>(paginatedResponse))
    )
  }
}
