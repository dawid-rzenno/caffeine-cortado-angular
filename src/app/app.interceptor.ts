import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs";
import { inject } from "@angular/core";
import { SnackbarService } from "./core/snackbar/snackbar.service";

export const appInterceptor: HttpInterceptorFn = (req, next) => {
	const service = inject(SnackbarService);

	return next(req).pipe(
		catchError(error => {
			switch (error.status) {
				case 401:
					service.open(`Unauthorized.`);
					break;

				case 404:
					service.open(`Not found.`);
					break;

				case 500:
					service.open(`Server error.`);
					break;

				default:
					service.open(`HTTP ${error.status} error.`);
					break;
			}

			return throwError(() => error);
		})
	);
};
