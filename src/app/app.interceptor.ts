import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs";
import { inject } from "@angular/core";
import { AppService } from "./app.service";

export const appInterceptor: HttpInterceptorFn = (req, next) => {
	const service = inject(AppService);

	return next(req).pipe(
		catchError(error => {
			switch (error.status) {
				case 401:
					service.openSnackBar(`Unauthorized.`);
					break;

				case 404:
					service.openSnackBar(`Not found.`);
					break;

				case 500:
					service.openSnackBar(`Server error.`);
					break;

				default:
					service.openSnackBar(`HTTP ${error.status} error.`);
					break;
			}

			return throwError(() => error);
		})
	);
};
