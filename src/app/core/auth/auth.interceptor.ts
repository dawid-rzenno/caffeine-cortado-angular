import { inject } from "@angular/core";
import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export function authInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(
    request.clone({
      setHeaders: { Authorization: inject(AuthService).authorizationToken },
    }),
  );
}
