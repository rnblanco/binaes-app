import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Reserva } from '../../../shared/models/borrow';
import { BorrowStatus } from '../../../shared/constants/status';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';
import { ExemplarSelectComponent } from '../../../borrows/components/exemplar-select.component';
import { UserSelectComponent } from '../../../users/component/user-select.component';
import { ExemplarStatusSelectComponent } from '../../../borrows/components/exemplar-status-select.component';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
})
export class ReservationPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  idBorrow: number;
  dates: Date[] = [];
  disabledDates: Date[] = [];
  minDate: Date = new Date();
  maxDate: Date;
  reservationDate: Date;
  
  addLoading = false;
  deleteLoading = false;
  reservation: Reserva;
  
  constructor(
    private route: ActivatedRoute,
    public exemplarSelect: ExemplarSelectComponent,
    public userSelect: UserSelectComponent,
    public exemplarStatusSelect: ExemplarStatusSelectComponent
  ) {
    super();
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  get formIsValid(): boolean{
    return this.userSelect.selectedUser?.length > 0 && this.exemplarSelect.selectedExemplar?.length > 0 && this.dates[0] !== null && this.dates[1] !== null;
  }
  
  loadAll(): void {
    if (this.user.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.reservationsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.exemplarSelect.loadExemplars();
        this.userSelect.loadUsers();
        this.exemplarStatusSelect.loadStatus();
        if (id) {
          this.id = id;
          this.loadInfo();
        }
        else this.loading = false;
      })
    );
  }
  
  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    this.addLoading = true;
    
    this.subscription.add(
      this.catalogService
      .addOfURL(`RESERVA`, {
        fh_Reserva: new Date(),
        PRESTAMO:{
          fh_Prestamo: this.dates[0],
          fh_Devolucion: this.dates[1],
          id_Estado: BorrowStatus.RESERVADO,
          id_usuarioPresta: this.userSelect.selectedUser[0],
          id_Ejemplar: this.exemplarSelect.selectedExemplar[0],
        }
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La reserva fue añadida satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.reservationsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir la reserva',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  update(): void {
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`RESERVA/${this.id}`, {
        id_Reserva: this.id,
        fh_Reserva: this.reservationDate,
        PRESTAMO:{
          id_Prestamo: this.idBorrow,
          fh_Prestamo: this.dates[0],
          fh_Devolucion: this.dates[1],
          id_Estado: this.exemplarStatusSelect.selectedStatus[0],
          id_usuarioPresta: this.userSelect.selectedUser[0],
          id_Ejemplar: this.exemplarSelect.selectedExemplar[0],
        }
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La reserva fue editado satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.reservationsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar la reserva',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`RESERVA/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La reserva fue eliminada con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.reservationsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar la reserva',
          });
          this.deleteLoading = false;
        }
      )
    );
  }
  
  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`RESERVA/${this.id}`)
      .subscribe(
        (response: Reserva) => {
          if (response) {
            this.isNew = false;
          }
          this.reservation = response;
          this.id = response.id_Reserva;
          this.idBorrow = response.PRESTAMO.id_Prestamo;
          this.dates = [new Date(response.PRESTAMO.fh_Prestamo), new Date(response.PRESTAMO.fh_Devolucion)];
          this.reservationDate = new Date(response.fh_Reserva);
          // this.maxDate = new Date(response.PRESTAMO.fh_Devolucion);
          this.minDate = new Date(response.PRESTAMO.fh_Prestamo) > this.minDate ? this.minDate : new Date(response.PRESTAMO.fh_Prestamo);
          this.userSelect.selectedUser = [response.PRESTAMO.USUARIO.id_Usuario];
          this.exemplarSelect.selectedExemplar = [response.PRESTAMO.EJEMPLAR.id_Ejemplar];
          this.exemplarStatusSelect.selectedStatus = [response.PRESTAMO.ESTADOS.id_Estado];
          this.exemplarStatusSelect.loadedStatus = response.PRESTAMO.ESTADOS.id_Estado;
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.reservationsPage]);
        }
      )
    );
  }
  
  onDateChange(): void {
    if(this.dates[0] === null || this.dates[1] === null){
      return;
    }
    
    if(!this.isNew){
      if (this.dates[1].getDate() === new Date().getDate()) this.exemplarStatusSelect.selectedStatus = [BorrowStatus.FINALIZADO];
      else this.exemplarStatusSelect.selectedStatus = [this.exemplarStatusSelect.loadedStatus];
    }
    
    let insideDates: Date[] = [];
    const initialDate: Date = new Date(this.dates[0].getTime());
    
    while (this.dates[1] > initialDate || this.dates[1].getDate() === initialDate.getDate()) {
      insideDates.push(new Date(initialDate.getDate()));
      initialDate.setDate(initialDate.getDate() + 1);
    }
    
    insideDates.forEach((date) => {
      this.disabledDates.forEach((disabledDate) => {
        if(date.getDate() === disabledDate.getDate()){
          this.dates = [];
          return;
        }
      });
      if (this.dates === []) return;
    });
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Reservas', routerLink: [this.routeInformation.reservationsPage] },
      { label: 'Reserva', routerLink: [this.routeInformation.reservationPage] }
    ];
  }
  
}
