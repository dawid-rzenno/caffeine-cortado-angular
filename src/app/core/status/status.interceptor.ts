import { inject } from "@angular/core";
import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { finalize, Observable, tap } from "rxjs";
import { StatusService } from "./status.service";

export function statusInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const started = Date.now();
  let isSuccess: boolean;
  const service = inject(StatusService);

  return next(request).pipe(
    tap({
      next: (event) => (isSuccess = event instanceof HttpResponse),
      error: () => (isSuccess = false),
    }),
    finalize(() => {
      const elapsed = Date.now() - started;
      const message = `${request.method} "${request.urlWithParams}" ${isSuccess} in ${elapsed} ms.`;

      if (isSuccess) {
        service.emitSuccessMessage(message);
      } else {
        service.emitFailureMessage(message);
      }
    }),
  );
}
