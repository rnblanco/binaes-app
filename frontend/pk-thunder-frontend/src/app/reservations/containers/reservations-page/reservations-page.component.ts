import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../auth/constants/roles';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { PaginadorReserva } from '../../../shared/models/borrow';
import { HttpParams } from '@angular/common/http';

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
    { field: 'PRESTAMO.fh_Prestamo', header: 'Reserva', width: 100 },
    { field: 'PRESTAMO.fh_Devolucion', header: 'Devolución', width: 100 },
  ] as any[];
  
  ngOnInit(): void {
    if(this.user.id_rolUsuario === Roles.USER){
      this.loadOwn();
    }
    else this.loadAll();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadOwn() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('RESERVA', this.httpParams.set('id_rolUsuario', this.user.ROLUSUARIO.id_rolUsuario).set('id_Usuario', this.user.id_Usuario))
      .subscribe(
        (response: PaginadorReserva) => {
          this.pagination = response.meta;
          this.currentPage = this.pagination.currentPage;
          this.list = response.data;
          this.loading = false;
        },
        () => (this.loading = false)
      )
    );
  }
  
  loadAll() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('RESERVA', this.httpParams)
      .subscribe(
        (response: PaginadorReserva) => {
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
      { label: this.user.id_rolUsuario === this.USER ? 'Mis reservas' : 'Reservas', routerLink: [this.routeInformation.reservationsPage] },
    ];
  }

}
