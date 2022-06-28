import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Evento, PaginadorEvento } from '../../../shared/models/event';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
})
export class EventsPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;

  constructor() {
    super();
  }

  cols = [
    { field: 'titulo', header: 'Título', width: 100 },
    { field: 'imagen', header: 'Imagen', width: 100 },
    // { field: 'Objetivo', header: 'Objetivo', width: 200 },
    { field: 'AREA.nombre', header: 'Área', width: 100 },
    { field: 'capacidad', header: 'Capacidad', width: 10 },
    { field: 'aprobado', header: 'Estado', width: 10 },
    { field: 'fh_Inicio', header: 'Inicio', width: 100 },
    { field: 'fh_Finalizacion', header: 'Fin', width: 100 },
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
      .getByNameWithParams('EVENTO', this.httpParams)
      .subscribe(
        (response: PaginadorEvento) => {
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
  
  onNew(){
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.eventPage}/`,
    ]);
  }

  onRowSelect({data}: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.eventPage}/${data.id_Evento}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
    ];
  }

}
