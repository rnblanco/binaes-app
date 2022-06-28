import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { MultiSelect } from 'primeng/multiselect';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Ejemplar, Estados, BorrowStatus } from '../../../shared/models/exemplar';
import { Prestamo } from '../../../shared/models/borrow';
import { Usuario } from 'src/app/shared/models/user';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-borrows-page',
  templateUrl: './borrow-page.component.html',
})
export class BorrowPageComponent extends BaseComponent implements OnInit {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  dates: Date[] = [];
  minDate: Date = new Date();
  maxDate: Date;
  disabledDates: Date[] = [];
  
  addLoading = false;
  deleteLoading = false;
  
  status: Estados[] = [];
  selectedStatus: number[] = [];
  loadedStatus: number;
  
  exemplarText: string ='';
  exemplars: Ejemplar[];
  selectedExemplar: number[] = [];
  @ViewChild('exemplarMultiSelect') exemplarMultiSelect: MultiSelect;
  
  userText: string ='';
  users: Usuario[];
  // selectedUser: string[] = [];
  selectedUser: number[] = [];
  @ViewChild('userMultiSelect') userMultiSelect: MultiSelect;
  
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
  
  loadAll(): void {
    if (this.user.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.borrowsPage])
      }, 50);
    }
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
      this.catalogService.deleteOfURL(`PRESTAMO/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El préstamo fue eliminado con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.borrowsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el préstamo',
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
      .addOfURL(`PRESTAMO`, {
        fh_Prestamo: this.dates[0],
        fh_Devolucion: this.dates[1],
        id_Estado: BorrowStatus.EN_PRESTAMO,
        id_usuarioPresta: this.selectedUser[0],
        id_Ejemplar: this.selectedExemplar[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El préstamo fue añadido satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.borrowsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el préstamo',
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
      .updateOfURL(`PRESTAMO/${this.id}`, {
        id_Prestamo: this.id,
        fh_Prestamo: this.dates[0],
        fh_Devolucion: this.dates[1],
        id_usuarioPresta: this.selectedUser[0],
        id_Estado: this.selectedStatus[0],
        id_Ejemplar: this.selectedExemplar[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El préstamo fue editado satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.borrowsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar el préstamo',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`PRESTAMO/${this.id}`)
      .subscribe(
        (response: Prestamo) => {
          if (response) {
            this.isNew = false;
          }
          this.id = response.id_Prestamo;
          this.dates = [new Date(response.fh_Prestamo), new Date(response.fh_Devolucion)];
          this.maxDate = new Date(response.fh_Devolucion);
          this.minDate = new Date(response.fh_Prestamo);
          this.selectedUser = [response.USUARIO.id_Usuario];
          this.selectedExemplar = [response.EJEMPLAR.id_Ejemplar];
          this.selectedStatus = [response.ESTADOS.id_Estado];
          this.loadedStatus = response.ESTADOS.id_Estado;
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.borrowsPage]);
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
    
    if (!this.isNew) {
      if (this.dates[1] < this.maxDate) this.selectedStatus = [BorrowStatus.FINALIZADO];
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
      { label: 'Préstamos', routerLink: [this.routeInformation.borrowsPage] },
      { label: 'Préstamo', routerLink: [this.routeInformation.borrowPage] }
    ];
  }
  
}
