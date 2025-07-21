import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessionStorageService } from "../core/session-storage/session-storage.service";

export function authInterceptor(
	request: HttpRequest<unknown>,
	next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
	const token = SessionStorageService.getItem<string>("token");

	if (token) {
		return next(
			request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
				},
			}),
		);
	}

	return next(request);
}
