import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: `Usuarios ${this.user?.ROLUSUARIO.id_rolUsuario === Roles.SUPER_ADMIN ? 'y Administradores' : ''}`, routerLink: [this.routeInformation.usersPage] },
    ];
  }

}
