import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Objetivo } from '../../../shared/models/event';
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
    { field: 'EVENTO.titulo', header: 'Título', width: 100 },
    { field: 'Objetivo', header: 'Objetivo', width: 200 },
    { field: 'EVENTO.AREA.nombre', header: 'Área', width: 100 },
    { field: 'EVENTO.capacidad', header: 'Capacidad', width: 10 },
    { field: 'EVENTO.fh_Inicio', header: 'Fecha de inicio', width: 100 },
    { field: 'EVENTO.fh_Finalizacion', header: 'Fecha de finalización', width: 100 },
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
      .getByNameWithParams('OBJETIVOSXEVENTO', this.httpParams)
      .subscribe(
        (response: Objetivo[]) => {
          // this.pagination = _response.meta;
          // this.currentPage = this.pagination.currentPage;
          this.list = response;
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
      `${this.routeInformation.eventPage}/${data.id_Objetivo}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
    ];
  }

}
