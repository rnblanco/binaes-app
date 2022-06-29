import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Roles } from '../../../auth/constants/roles';
import { PaginadorVisita, Visita } from '../../../shared/models/visit';


@Component({
  selector: 'app-visits-page',
  templateUrl: './visits-page.component.html',
})
export class VisitsPageComponent extends LazyComponent implements OnInit {

  USER = Roles.USER;

  constructor() {
    super();
  }

  cols = [
    { field: 'USUARIO.nombre', header: 'Nombre del visitante', width: 100 },
    { field: 'AREA.nombre', header: 'Nombre del área', width: 100 },    
    { field: 'fh_entrada', header: 'Entrada', width: 100 },
    { field: 'fh_salida', header: 'Salida', width: 10 },
  ] as any[];

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  loadAll() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('VISITAS', this.httpParams)
        .subscribe(
          (response: PaginadorVisita) => {
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
      `${this.routeInformation.visitPage}/`,
    ]);
  }

  onRowSelect({ data }: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.visitPage}/${data.id_Visita}/`,
    ]);
  }

  getBreadCrumbs() {
    return [
      { label: 'Visitas', routerLink: [this.routeInformation.visitPage] },
    ];
  }
}
