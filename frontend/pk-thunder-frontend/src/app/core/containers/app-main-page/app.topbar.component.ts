import { Component } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { MenuItem } from 'primeng/api';
import { Usuario, RolUsuario } from '../../../shared/models/user';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { BaseComponent } from '../../../shared/components/base.component';

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
          <i *ngif="user?.fotografia" class="pi pi-user"></i>
          <p-avatar image="https://localhost:44314/images/{{image}}" styleClass="mr-2" size="large" shape="circle"></p-avatar>
          <span>Profile</span>
        </a>
      </div>
    </div>
  `,
})

export class AppTopBarComponent extends BaseComponent {
  items: MenuItem[];
  id: string;
  image: string;
  routeInformation = RouteInformation;
  constructor(public appMain: AppMainComponent) {
    super();
  }

  ngOnInit(): void {
    this.id = this.user.id_Usuario;
    this.loadInfo();
  }

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams(`USUARIO/${this.id}`)
        .subscribe(
          (response: Usuario) => {
            this.image = response.fotografia;
            setTimeout(() => {
              this.loading = false;
            }, 200);
          },
          () => {
            this.loading = false;
            this.router.navigate([RouteInformation.profilePage]);
          }
        )
    );
  }

}

