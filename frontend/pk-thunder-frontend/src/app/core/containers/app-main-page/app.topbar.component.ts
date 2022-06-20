import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="layout-topbar">
      <a class="layout-topbar-logo" routerLink="">
        <img src="assets/layout/images/{{appMain?.config?.dark ? 'logo-white' : 'logo-dark'}}.svg" alt="logo">
        <span>Binaes</span>
      </a>
    
      <a class="p-link layout-menu-button layout-topbar-button" href="#" (click)="appMain.toggleMenu($event)">
        <i class="pi pi-bars"></i>
      </a>
    
      <a class="p-link layout-topbar-menu-button layout-topbar-button" href="#" (click)="appMain.toggleTopMenu($event)">
        <i class="pi pi-ellipsis-v"></i>
      </a>
    
      <div class="layout-topbar-menu" [ngClass]="{'layout-topbar-menu-mobile-active':appMain.topMenuActive}">
        <a href="#" class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </a>
      </div>
    </div>
  `,
})

export class AppTopBarComponent {
  items: MenuItem[] | undefined;
  constructor(public appMain: AppMainComponent) { }
}

