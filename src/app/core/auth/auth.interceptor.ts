import { inject } from "@angular/core";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export function authInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const authService: AuthService = inject(AuthService);

  if (authService.accessToken) {
    return next(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.accessToken}`,
        },
      }),
    );
  }

  return next(request);
}
