import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../auth/constants/roles';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Reserva } from '../../../shared/models/borrow';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
})
export class ReservationsPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;
  
  constructor() {
    super();
  }
  
  cols = [
    { field: 'PRESTAMO.EJEMPLAR.nombre', header: 'Nombre', width: 125 },
    { field: 'PRESTAMO.USUARIO.nombre', header: 'Usuario', width: 125 },
    { field: 'PRESTAMO.ESTADOS.estado', header: 'Estado', width: 100 },
    { field: 'fh_Reserva', header: 'Fecha de reserva', width: 100 },
    { field: 'PRESTAMO.fh_Prestamo', header: 'Préstamo', width: 100 },
    { field: 'PRESTAMO.fh_Devolucion', header: 'Devolución', width: 100 },
  ] as any[];
  
  ngOnInit(): void {
    this.loadAll();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadAll() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('RESERVA', this.httpParams)
      .subscribe(
        (response: Reserva[]) => {
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
      `${this.routeInformation.reservationPage}/`,
    ]);
  }
  
  onRowSelect({data}: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.reservationPage}/${data.id_Reserva}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Reservas', routerLink: [this.routeInformation.reservationsPage] },
    ];
  }

}
