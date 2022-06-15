import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  currUser = null;
  authService: AuthService;

  constructor(private inj: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('oauthCallback') > -1 ) {
            return next.handle(req);
        }
        this.authService = this.inj.get(AuthService);
        return this.authService.getUserIdToken().pipe(
            take(1), switchMap(token => {
                if (!token || this.isAuthException(req.url)) {
                    return next.handle(req);
                }
                const headers = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${token}`)
                });
                return next.handle(headers);
            })
        );
    }

    isAuthException(url: string): boolean {
        const array = ['public', 'wp-json'];
        return array.some(element => url.includes(element));
    }
}