import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Usuario, RolUsuario, PaginadorUsuario } from '../../../shared/models/user';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;

  constructor() {
    super();
  }

  cols = [
    { field: 'nombre', header: 'Nombre', width: 100 },
    { field: 'email', header: 'Email', width: 100 },    
    { field: 'telefono', header: 'Teléfono', width: 100 },
    { field: 'ocupacion', header: 'Ocupación', width: 10 },
    { field: 'direccion', header: 'Dirección', width: 10 },
    { field: 'fotografia', header: 'Fotografía', width: 100 },
    { field: 'institucion', header: 'Institución', width: 100 },
    { field: 'ROLUSUARIO.rol', header: 'Rol', width: 100 },
  ] as any[];

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  loadAll() {
    if (this.user.ROLUSUARIO.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([`${this.routeInformation.dashboardPage}`])
      }, 50);
    }
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('USUARIO', this.httpParams.set("id_rolUsuario", this.user.id_rolUsuario ?? 0).set("id_Usuario", this.user.id_Usuario ?? 0))
        .subscribe(
          (response: PaginadorUsuario) => {
            this.pagination = response.meta;
            this.currentPage = this.pagination.currentPage;
            this.list = response.data;
            this.loading = false;
          },
          () => (this.loading = false)
        )
    );
  }

  onLazyLoad(pagination: any): void {
    this.paginate(pagination);
    this.loadAll();
  }

  onNew() {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.userPage}/`,
    ]);
  }

  onRowSelect({ data }: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.userPage}/${data.id_Usuario}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: `Usuarios ${this.user?.ROLUSUARIO.id_rolUsuario === Roles.SUPER_ADMIN ? 'y Administradores' : ''}`, routerLink: [this.routeInformation.usersPage] },
    ];
  }

}
