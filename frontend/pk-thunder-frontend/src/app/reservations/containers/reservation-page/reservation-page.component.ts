import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { MultiSelect } from 'primeng/multiselect';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Ejemplar, Estados, BorrowStatus } from '../../../shared/models/exemplar';
import { Prestamo, Reserva } from '../../../shared/models/borrow';
import { Usuario } from 'src/app/shared/models/user';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styles: [
  ]
})
export class ReservationPageComponent extends BaseComponent implements OnInit {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  dates: Date[] = [];
  disabledDates: Date[] = [];
  minDate: Date = new Date();
  maxDate: Date;
  reservationDate: Date;
  
  addLoading = false;
  deleteLoading = false;
  
  status: Estados[] = [];
  selectedStatus: number[] = [];
  loadedStatus: number;
  idBorrow: number;
  
  exemplarText: string ='';
  exemplars: Ejemplar[];
  selectedExemplar: number[] = [];
  @ViewChild('exemplarMultiSelect') exemplarMultiSelect: MultiSelect;
  
  userText: string ='';
  users: Usuario[];
  // selectedUser: string[] = [];
  selectedUser: number[] = [];
  @ViewChild('userMultiSelect') userMultiSelect: MultiSelect;
  
  reservation: Reserva;
  constructor(private route: ActivatedRoute) {
    super();
  }
  
  get formIsValid(): boolean{
    return this.selectedUser?.length > 0 && this.selectedExemplar?.length > 0 && this.dates[0] !== null && this.dates[1] !== null;
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadAll():void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.loadExemplars();
        this.loadUsers();
        this.loadStatus();
        if (id) {
          this.id = id;
          this.loadInfo();
        }
        else this.loading = false;
      })
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
          id_usuarioPresta: this.selectedUser[0],
          id_Ejemplar: this.selectedExemplar[0],
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
          id_Estado: this.selectedStatus[0],
          id_usuarioPresta: this.selectedUser[0],
          id_Ejemplar: this.selectedExemplar[0],
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
          this.selectedUser = [response.PRESTAMO.USUARIO.id_Usuario];
          this.selectedExemplar = [response.PRESTAMO.EJEMPLAR.id_Ejemplar];
          this.selectedStatus = [response.PRESTAMO.ESTADOS.id_Estado];
          this.loadedStatus = response.PRESTAMO.ESTADOS.id_Estado;
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
  
  userFilter(event: any): void {
    this.userText = event.filter;
  }
  
  userChange(event: any): void {
    this.selectedUser = [event.itemValue];
  }
  
  loadUsers(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('USUARIO')
      .subscribe(
        (response: Usuario[]) => {
          this.users = response;
        },
      )
    );
  }
  
  exemplarFilter(event: any): void {
    this.exemplarText = event.filter;
  }
  
  exemplarChange(event: any): void {
    this.selectedExemplar = [event.itemValue];
    this.loadDisabledDates(event.itemValue);
  }
  
  loadDisabledDates(id: number): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('PRESTAMO', new HttpParams().set('id_Ejemplar', id))
      .subscribe(
        (response: Date[]) => {
          if(response){
            this.disabledDates = response.map((date)=> new Date(date));
          }
          this.dates = [];
        },
      )
    );
  }
  
  loadExemplars(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('EJEMPLAR')
      .subscribe(
        (response: Ejemplar[]) => {
          this.exemplars = response;
        },
      )
    );
  }
  
  onDateChange(): void {
    if(this.dates[0] === null || this.dates[1] === null){
      return;
    }
    
    if(!this.isNew){
      if (this.dates[1].getDate() === new Date().getDate()) this.selectedStatus = [BorrowStatus.FINALIZADO];
      else this.selectedStatus = [this.loadedStatus];
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
  
  loadStatus(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('ESTADOS')
      .subscribe(
        (response: Estados[]) => {
          this.status = response;
        },
      )
    );
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Reservas', routerLink: [this.routeInformation.reservationsPage] },
      { label: 'Reserva', routerLink: [this.routeInformation.reservationPage] }
    ];
  }
  
}
