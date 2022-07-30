import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Prestamo } from '../../../shared/models/borrow';
import { ExemplarSelectComponent } from '../../components/exemplar-select.component';
import { UserSelectComponent } from '../../../users/component/user-select.component';
import { ExemplarStatusSelectComponent } from '../../components/exemplar-status-select.component';
import { BorrowStatus } from '../../../shared/constants/status';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';

@Component({
  selector: 'app-borrows-page',
  templateUrl: './borrow-page.component.html',
})
export class BorrowPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  minDate: Date = new Date();
  maxDate: Date;
  
  addLoading = false;
  deleteLoading = false;
  
  constructor(
    private route: ActivatedRoute,
    public userSelect: UserSelectComponent,
    public exemplarSelect: ExemplarSelectComponent,
    public exemplarStatusSelect: ExemplarStatusSelectComponent
  ) {
    super();
  }
  
  get formIsValid(): boolean {
    return this.userSelect.selectedUser?.length > 0 && this.exemplarSelect.selectedExemplar?.length > 0 && this.exemplarSelect.dates[0] !== null && this.exemplarSelect.dates[1] !== null;
  }
  
  get isFinalizado(): boolean {
    return this.exemplarStatusSelect.loadedStatus === BorrowStatus.FINALIZADO;
  }
  
  ngOnInit(): void {
    this.userSelect = new UserSelectComponent();
    this.exemplarSelect = new ExemplarSelectComponent();
    this.exemplarStatusSelect = new ExemplarStatusSelectComponent();
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadAll(): void {
    if (this.user.ROLUSUARIO.id_rolUsuario === Roles.USER) {
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
          this.exemplarSelect.dates = [new Date(response.fh_Prestamo), new Date(response.fh_Devolucion)];
          this.maxDate = new Date(response.fh_Devolucion);
          this.minDate = new Date(response.fh_Prestamo);
          this.userSelect.selectedUser = [response.USUARIO.id_Usuario];
          this.exemplarSelect.selectedExemplar = [response.EJEMPLAR.id_Ejemplar];
          this.exemplarStatusSelect.selectedStatus = [response.ESTADOS.id_Estado];
          this.exemplarStatusSelect.loadedStatus = response.ESTADOS.id_Estado;
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
  
  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .addOfURL(`PRESTAMO`, {
        fh_Prestamo: this.exemplarSelect.dates[0],
        fh_Devolucion: this.exemplarSelect.dates[1],
        id_Estado: this.exemplarSelect.dates[0].getDate() === new Date().getDate() ? BorrowStatus.EN_PRESTAMO : BorrowStatus.RESERVADO,
        id_usuarioPresta: this.userSelect.selectedUser[0],
        id_Ejemplar: this.exemplarSelect.selectedExemplar[0],
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
        fh_Prestamo: this.exemplarSelect.dates[0],
        fh_Devolucion: this.exemplarSelect.dates[1],
        id_usuarioPresta: this.userSelect.selectedUser[0],
        id_Estado: this.exemplarSelect.dates[0].getDate() === new Date().getDate() ? BorrowStatus.EN_PRESTAMO : BorrowStatus.RESERVADO,
        id_Ejemplar: this.exemplarSelect.selectedExemplar[0],
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
  
  onDateChange(): void {
    if(this.exemplarSelect.dates[0] === null || this.exemplarSelect.dates[1] === null){
      return;
    }
    
    if (!this.isNew) {
      if (this.exemplarSelect.dates[1] < this.maxDate) this.exemplarStatusSelect.selectedStatus = [BorrowStatus.FINALIZADO];
      else this.exemplarStatusSelect.selectedStatus = [this.exemplarStatusSelect.loadedStatus];
    }
  
    let insideDates: Date[] = [];
    const initialDate: Date = new Date(this.exemplarSelect.dates[0].getTime());

    while (this.exemplarSelect.dates[1] > initialDate || this.exemplarSelect.dates[1].getDate() === initialDate.getDate()) {
      insideDates.push(new Date(initialDate.getDate()));
      initialDate.setDate(initialDate.getDate() + 1);
    }

    insideDates.forEach((date) => {
      this.exemplarSelect.disabledDates.forEach((disabledDate) => {
        if(date.getDate() === disabledDate.getDate()){
          this.exemplarSelect.dates = [];
          return;
        }
      });
      if (this.exemplarSelect.dates === []) return;
    });
    
    this.exemplarStatusSelect.selectedStatus = [this.exemplarSelect.dates[0].getDate() === new Date().getDate() ? BorrowStatus.EN_PRESTAMO : BorrowStatus.RESERVADO]
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Préstamos', routerLink: [this.routeInformation.borrowsPage] },
      { label: 'Préstamo', routerLink: [this.routeInformation.borrowPage] }
    ];
  }
}
