import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SignInResponse } from "./sign-in-response";
import { SignInRequest } from "./sign-in-request";
import { environment } from "../../environments/environment";
import { SignUpRequest } from "./sign-up-request";
import { User } from "../users/user";
import { SessionStorageService } from "../core/session-storage/session-storage.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { UserRoleIds } from "../users/user-role";
import { SnackbarService } from '../core/snackbar/snackbar.service';

export type ChangePasswordForm = {
	id: number;
	password: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	readonly apiUrl = `${environment.apiUrl}/auth`;
	readonly user$ = new BehaviorSubject<User | undefined>(undefined);

	get userId(): number | undefined {
		return this.user$.value?.id;
	}

	get userRoleId(): UserRoleIds | number | undefined {
		return this.user$.value?.role?.id;
	}

	get isAdmin(): boolean {
		return this.userRoleId === UserRoleIds.Admin;
	}

	constructor(private http: HttpClient, private snackbarService: SnackbarService) {
		const initialToken = SessionStorageService.getItem<string>("token");
		const initialExpiration = SessionStorageService.getItem<Date>("expiration");

		if (initialToken && initialExpiration) {
			this.me$()
				.pipe(takeUntilDestroyed())
				.subscribe((user: User) => this.user$.next(user));
		}
	}

	signIn$(request: SignInRequest) {
		return this.http
			.post<SignInResponse>(`${this.apiUrl}/sign-in`, request)
			.pipe(
				tap((response: SignInResponse) => {
					SessionStorageService.setItem("token", response.token)
					SessionStorageService.setItem("expiration", response.expiration)
					this.user$.next(response.user)
				})
			)
	}

	signOut() {
		SessionStorageService.removeItem("token")
		SessionStorageService.removeItem("expiration")
		this.user$.next(undefined);
	}

	signUp$(request: SignUpRequest): Observable<{ id: number }> {
		return this.http
			.post<{ id: number }>(`${this.apiUrl}/sign-up`, request)
			.pipe(
				catchError((error: HttpErrorResponse) => {
					if (error.status === 409) {
						this.snackbarService.open("This username is already taken.");
					}

					return throwError(() => error)
				})
			)
	}

	me$() {
		return this.http.get<User>(`${this.apiUrl}/me`)
	}

	changePassword$(form: ChangePasswordForm) {
		return this.http.put<void>(`${this.apiUrl}/password`, form)
	}
}
