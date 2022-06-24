import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuItem } from 'primeng/api';
import { RouteInformation } from 'src/app/shared/constants/route-information';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="layout-topbar">
      <a class="layout-topbar-logo" routerLink="">
        <img src="assets/images/ux/binaes.jpg" alt="logo">
        <span>Binaes</span>
      </a>
    
      <a class="p-link layout-menu-button layout-topbar-button" href="#" (click)="appMain.toggleMenu($event)">
        <i class="pi pi-bars"></i>
      </a>
    
      <a class="p-link layout-topbar-menu-button layout-topbar-button" href="#" (click)="appMain.toggleTopMenu($event)">
        <i class="pi pi-ellipsis-v"></i>
      </a>
    
      <div class="layout-topbar-menu" [ngClass]="{'layout-topbar-menu-mobile-active':appMain.topMenuActive}">
        <a [routerLink]="routeInformation.profilePage" class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </a>
      </div>
    </div>
  `,
})

export class AppTopBarComponent {
  items: MenuItem[];
  routeInformation = RouteInformation;
  constructor(public appMain: AppMainComponent) { }
}

