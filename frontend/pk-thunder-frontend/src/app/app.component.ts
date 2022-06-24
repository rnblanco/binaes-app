import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LocalStorageService } from 'ngx-webstorage';
import { pairwise, Subscription } from 'rxjs';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageInformation } from './shared/constants/storage-information';
import { GlobalMessageService } from './auth/services/global-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pk-thunder-frontend';
  menuMode = 'static';
  ripple: boolean;
  subscription: Subscription;
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private readonly messageService: MessageService,
    private router: Router,
    private readonly storage: LocalStorageService,
    private readonly globalMessageService: GlobalMessageService
  ) {
    this.subscription = router.events
    .pipe(
      filter((e: any) => e instanceof RoutesRecognized),
      pairwise()
    )
    .subscribe((e: any) => {
      this.storage.store(StorageInformation.lastPage, e[0].urlAfterRedirects);
    });
  }
  
  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.globalMessageService.itemsHandler.subscribe((_payload) => {
      this.messageService.add({
        severity: _payload.type,
        summary: _payload.title,
        detail: _payload.body,
      });
    });
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
