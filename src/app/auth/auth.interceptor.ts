import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { SessionStorageService } from "../core/session-storage/session-storage.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export function authInterceptor(
	request: HttpRequest<unknown>,
	next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
	const token = SessionStorageService.getItem<string>("token");
	const router = inject(Router);

	if (token) {
		return next(
			request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
				},
			}),
		).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401) {
					router.navigate(['/auth/sign-in']);
				}
				return throwError(() => error);
			})
		);
	}

	return next(request).pipe(
		catchError((error: HttpErrorResponse) => {
			if (error.status === 401) {
				router.navigate(['/auth/sign-in']);
			}
			return throwError(() => error);
		})
	);
}
