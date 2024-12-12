import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { environment } from "../../../environments/environment";

export type SignUpBody = {
  email: string;
  password: string;
};

export type SignInBody = SignUpBody & {
  rememberMe: boolean;
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly endpointUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient) {}

  private _accessToken: string | undefined = undefined;

  get accessToken(): string {
    return this._accessToken || "";
  }

  signIn(body: SignInBody): Observable<unknown> {
    return this.httpClient
      .post<{ accessToken: string }>(`${this.endpointUrl}/login`, body)
      .pipe(
        tap(
          (response: { accessToken: string }) =>
            (this._accessToken = response.accessToken),
        ),
        catchError(this.catchError),
      );
  }

  signOut(): Observable<unknown> {
    return this.httpClient.post(`${this.endpointUrl}/sign-out`, undefined).pipe(
      tap(() => (this._accessToken = undefined)),
      catchError(this.catchError),
    );
  }

  signUp(body: SignUpBody): Observable<unknown> {
    return this.httpClient
      .post(`${this.endpointUrl}/sign-up`, body)
      .pipe(catchError(this.catchError));
  }

  private catchError(error: unknown): Observable<unknown> {
    return of(error);
  }
}
