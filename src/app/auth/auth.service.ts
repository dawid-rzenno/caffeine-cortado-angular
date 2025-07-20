import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SignInResponse } from "./sign-in-response";
import { SignInRequest } from "./sign-in-request";
import { environment } from "../../environments/environment";
import { SignUpRequest } from "./sign-up-request";
import { User } from "./user";
import { SessionStorageService } from "../session-storage/session-storage.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	readonly apiUrl = `${environment.apiUrl}/auth`;
	readonly token$ = new BehaviorSubject<string | undefined>(undefined);
	readonly expiration$ = new BehaviorSubject<Date | undefined>(undefined);
	readonly user$ = new BehaviorSubject<User | undefined>(undefined);

	constructor(private http: HttpClient) {
		const initialToken = SessionStorageService.getItem<string>("token");
		const initialExpiration = SessionStorageService.getItem<Date>("expiration");

		if (initialToken && initialExpiration) {
			this.token$.next(initialToken);
			this.expiration$.next(initialExpiration);

			this.me$()
				.pipe(takeUntilDestroyed())
				.subscribe((user: User) => this.user$.next(user));
		}

		this.token$
			.pipe(takeUntilDestroyed())
			.subscribe((token) => {
				if (token) {
					SessionStorageService.setItem("token", token)
				} else {
					SessionStorageService.removeItem("token");
				}
			});

		this.expiration$
			.pipe(takeUntilDestroyed())
			.subscribe((expiration) => {
				if (expiration) {
					SessionStorageService.setItem("expiration", expiration)
				} else {
					SessionStorageService.removeItem("expiration");
				}
			});
	}

	signIn$(request: SignInRequest): Observable<SignInResponse> {
		return this.http
			.post<SignInResponse>(`${this.apiUrl}/sign-in`, request)
			.pipe(
				tap((response: SignInResponse) => {
					this.token$.next(response.token);
					this.expiration$.next(response.expiration);
					this.user$.next(response.user)
				})
			)
	}

	signUp$(request: SignUpRequest): Observable<void> {
		return this.http.post<void>(`${this.apiUrl}/sign-up`, request)
	}

	me$(): Observable<User> {
		return this.http.get<User>(`${this.apiUrl}/me`)
	}
}
