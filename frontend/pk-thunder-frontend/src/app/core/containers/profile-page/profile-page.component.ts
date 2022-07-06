import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent extends BaseComponent{
  
  items: MenuItem[] = [
    {label: 'Código QR', routerLink: this.routeInformation.profileQrPage},
    {label: 'Información personal', routerLink: this.routeInformation.profileInfoPage},
    {label: 'Cambio de contraseña', routerLink: this.routeInformation.profilePasswordPage},
  ];
  
  constructor() {
    super();
  }
}
