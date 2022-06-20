import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  currUser = null;
  authService: AuthService | undefined;

  constructor(private inj: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url.indexOf('oauthCallback') > -1 ) return next.handle(req);
      this.authService = this.inj.get(AuthService);
      const user = this.authService.storagedUser;
      const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${user.token}`)
      });
      return next.handle(headers);
    }

    isAuthException(url: string): boolean {
        const array = ['public', 'wp-json'];
        return array.some(element => url.includes(element));
    }
}