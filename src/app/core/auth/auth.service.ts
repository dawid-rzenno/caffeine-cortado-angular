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

  private _authorizationToken: string | undefined = undefined;

  get authorizationToken(): string {
    return this._authorizationToken || "";
  }

  signIn(body: SignInBody): Observable<unknown> {
    return this.httpClient
      .post<string>(`${this.endpointUrl}/sign-in`, body)
      .pipe(
        tap((token: string) => (this._authorizationToken = token)),
        catchError(this.catchError),
      );
  }

  signOut(): Observable<unknown> {
    return this.httpClient.post(`${this.endpointUrl}/sign-out`, undefined).pipe(
      tap(() => (this._authorizationToken = undefined)),
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
