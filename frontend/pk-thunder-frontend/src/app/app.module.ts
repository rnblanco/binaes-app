import { Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpInterceptorService } from './auth/interceptors/http-interceptor-service';
import { CoreModule } from './core/core.module';
import { AppBreadcrumbService } from './core/containers/app-main-page/app.breadcrumb.service';
import { AuthService } from './auth/services/auth.service';
import { MenuService } from './core/services/app.menu.service';
import { AppInjector } from './app-injector.service';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { TagPipe } from './shared/pipes/tag.pipe';
import esSV from '@angular/common/locales/es-SV';
import { registerLocaleData } from '@angular/common';
import { PhotoPipe } from './shared/pipes/photo.pipe';

registerLocaleData(esSV);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxWebstorageModule.forRoot({
      prefix: 'binaes',
      separator: '.',
      caseSensitive: true,
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    CoreModule
  ],
  providers: [
    PhotoPipe,
    MenuService,
    AppBreadcrumbService,
    AuthService,
    MessageService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es-SV' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
