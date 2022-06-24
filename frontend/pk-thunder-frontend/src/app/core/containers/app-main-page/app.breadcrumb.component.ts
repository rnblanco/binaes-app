import { Component, OnDestroy } from '@angular/core';
import { AppBreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './app.breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;
    items: MenuItem[] = [];
    home: MenuItem;
    search: string = '';

    constructor(public breadcrumbService: AppBreadcrumbService, public appMain: AppMainComponent) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(items => {
            this.items = items;
        });

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    ngOnDestroy() {
        if (!this.subscription) return;
        this.subscription.unsubscribe();
    }
}
