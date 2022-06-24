import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { StorageInformation } from '../../shared/constants/storage-information';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  storageService: LocalStorageService;

  constructor(private inj: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url.split('/').includes('INICIAR_SESION')) return next.handle(req);
      this.storageService = this.inj.get(LocalStorageService);
      const token = this.storageService.retrieve(StorageInformation.token);
      const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(headers);
    }

    isAuthException(url: string): boolean {
        const array = ['public', 'wp-json'];
        return array.some(element => url.includes(element));
    }
}