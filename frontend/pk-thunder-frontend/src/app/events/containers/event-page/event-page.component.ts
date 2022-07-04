import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { Evento } from '../../../shared/models/event';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';
import { UploadFileComponent } from '../../../shared/components/upload-file.component';
import { AreaSelectComponent } from '../../../areas/components/area-select.component';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
})

export class EventPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;

  id: number;
  title: string;
  status: boolean;

  selectedStatus: boolean;
  readableStatus: string;
  loadedStatus: boolean = true;
  
  maxDate: Date;
  minDate: Date = new Date();
  
  addLoading = false;
  deleteLoading = false;
  
  constructor(
    private route: ActivatedRoute,
    public uploadFile: UploadFileComponent,
    public areaSelect: AreaSelectComponent,
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  get formIsValid(): boolean {
    return this.title !== '' && this.areaSelect.selectedArea?.length > 0 && this.areaSelect.dates[0] !== undefined && this.areaSelect.dates[1] !== undefined
      && (this.uploadFile.uploadedFiles !== undefined || this.uploadFile.uploadedFile?.length > 0);
  }
  
  changeStatus(): void {
    this.readableStatus = this.selectedStatus ? 'Reservado' : 'Finalizado';
  }

  loadAll(): void {
    if (this.user.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.eventsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {        
        this.loading = true;
        this.areaSelect.loadAreas();
        if (id) {
          this.id = id;
          this.loadInfo();
        } else {
          this.loading = false;
        }        
      })
    );
  }
  
  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`EVENTO/${this.id}`)
      .subscribe(
        (response: Evento) => {
          if (response) {
            this.isNew = false;
          }
          this.id = response.id_Evento;
          this.areaSelect.selectedArea.push(response.AREA.id_Area);
          this.areaSelect.dates = [new Date(response.fh_Inicio), new Date(response.fh_Finalizacion)];
          this.maxDate = new Date(response.fh_Finalizacion);
          this.minDate = new Date(response.fh_Inicio);
          this.title = response.titulo;
          this.areaSelect.capacity = response.capacidad;
          this.selectedStatus = response.aprobado;
          this.loadedStatus = response.aprobado;
          this.changeStatus();
          this.uploadFile.uploadedFile.push(response.imagen);
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.eventPage]);
        }
      )
    );
  }

  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .addOfURL(`EVENTO`, {
        imagen: this.uploadFile.varbinaryImage,
        titulo: this.title,
        capacidad: this.areaSelect.capacity,
        fh_Inicio: this.areaSelect.dates[0],
        fh_Finalizacion: this.areaSelect.dates[1],
        id_areaRealizacion: this.areaSelect.selectedArea[0],
        aprobado: true,
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'El evento fue añadido satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.eventsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el evento',
          });
          this.addLoading = false;
        }
      )
    );
  }

  update(): void {
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
    }this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`EVENTO/${this.id}`, {
        imagen: this.uploadFile.varbinaryImage === undefined ? btoa(this.uploadFile.uploadedFile[0]) : this.uploadFile.varbinaryImage,
        id_Evento: this.id,
        titulo: this.title,
        capacidad: this.areaSelect.capacity,
        aprobado: this.selectedStatus,
        fh_Inicio: this.areaSelect.dates[0],
        fh_Finalizacion: this.areaSelect.dates[1],
        id_areaRealizacion: this.areaSelect.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'El evento fue editado satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.eventsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar el evento',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`EVENTO/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'El evento fue eliminado con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.eventsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el evento',
          });
          this.deleteLoading = false;
        }
      )
    );
  }
  
  onDateChange(): void {
    if(this.areaSelect.dates[0] === null || this.areaSelect.dates[1] === null){
      return;
    }
  
    if (!this.isNew) {
      if (this.areaSelect.dates[1] < this.maxDate) this.selectedStatus = false;
      else this.selectedStatus = this.loadedStatus;
      this.readableStatus = this.selectedStatus ? 'Reservado' : 'Finalizado';
    }
    
    let insideDates: Date[] = [];
    const initialDate: Date = new Date(this.areaSelect.dates[0].getTime());
    
    while (this.areaSelect.dates[1] > initialDate || this.areaSelect.dates[1].getDate() === initialDate.getDate()) {
      insideDates.push(new Date(initialDate.getTime()));
      initialDate.setDate(initialDate.getDate() + 1);
    }
    
    insideDates.forEach((date) => {
      this.areaSelect.disabledDates.forEach((disabledDate) => {
        if(date.getDate() === disabledDate.getDate()){
          this.areaSelect.dates = [];
          return;
        }
      });
      if (this.areaSelect.dates === []) return;
    });
  }

  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
      { label: 'Evento', routerLink: [this.routeInformation.eventPage] },
    ];
  }
}