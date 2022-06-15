import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { GlobalMessageService } from "../services/global-message.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    public router: Router,
    private readonly globalMessageService: GlobalMessageService) { }

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        return throwError(error.error);
      })
    );
  }
}
