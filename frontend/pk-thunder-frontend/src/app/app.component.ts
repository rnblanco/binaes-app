import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LocalStorageService } from 'ngx-webstorage';
import { pairwise, Subscription } from 'rxjs';
import { Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageInformation } from './shared/constants/storage-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pk-thunder-frontend';
  menuMode = 'static';
  ripple: boolean | undefined;
  subscription: Subscription;
  
  constructor(private primengConfig: PrimeNGConfig, private router: Router, private readonly storage: LocalStorageService) {
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
  }
}
