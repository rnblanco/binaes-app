import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppInjector } from 'src/app/app-injector.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ConfirmationService } from 'primeng/api';
import { GlobalMessageService } from 'src/app/auth/services/global-message.service';
import { AppBreadcrumbService } from 'src/app/core/containers/app-main-page/app.breadcrumb.service';
import { CatalogService } from '../services/catalog.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouteInformation } from '../constants/route-information';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'ngx-webstorage';
import { FormItem } from './custom-modal/form-item';
import { HttpParams } from '@angular/common/http';
import { Params, Router } from '@angular/router';
import packageJson from 'package.json';
import { trigger } from '@angular/animations';
import { definitions } from 'src/app/shared/utils/animations/animate';
import { User } from '../models/user';
const { InAndOut, InAndOutFast, InAndOutFaster } = definitions;

@Component({
  selector: 'root',
  template: '',
  animations: [
    trigger('InAndOut', InAndOut),
    trigger('InAndOutFast', InAndOutFast),
    trigger('InAndOutFaster', InAndOutFaster),
  ],
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  // App info
  appName = 'Binaes';
  currentDate = new Date();
  year = this.currentDate.getFullYear();
  // Basic needs
  env: any;
  version: any;
  router: Router;
  user: User;
  authService: AuthService;
  catalogService: CatalogService;
  validatorService: ValidatorService;
  storageService: LocalStorageService;
  messageService: GlobalMessageService;
  breadcrumbService: AppBreadcrumbService;
  confirmationService: ConfirmationService;
  subscription: Subscription;
  routeInformation = RouteInformation;
  // Requests
  loading = false;
  buttonLoading = false;
  httpParams: HttpParams = new HttpParams();
  routeParams: Params;
  // Reactive Forms
  form: FormGroup;
  formBuilder: FormBuilder;
  // Show modal
  formSelected: FormItem;
  
  protected constructor() {
    this.confirmationService = AppInjector.injector.get(ConfirmationService);
    this.catalogService = AppInjector.injector.get(CatalogService);
    this.validatorService = AppInjector.injector.get(ValidatorService);
    this.storageService = AppInjector.injector.get(LocalStorageService);
    this.messageService = AppInjector.injector.get(GlobalMessageService);
    this.breadcrumbService = AppInjector.injector.get(AppBreadcrumbService);
    this.router = AppInjector.injector.get(Router);
    this.authService = AppInjector.injector.get(AuthService);
    this.user = this.authService.storagedUser as User;
    this.formBuilder = new FormBuilder();
    this.subscription = new Subscription();
    this.version = packageJson.version;
    this.env = environment;
  }

  capitalize(text: string): string {
    text = text.toLowerCase();
    return `${text.charAt(0).toUpperCase()}${text.slice(1, text.length)}`;
  }
  
  viewFile(url: string) {
    window.open(`${this.env.api_url}/public/file/${encodeURIComponent(url)}`);
  }

  ngOnDestroy(): void {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.user = this.authService.storagedUser;
  }
}
