import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Objetivo, Evento, Area } from '../../../shared/models/event';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { FileUpload } from 'primeng/fileupload'
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
})

export class EventPageComponent extends BaseComponent implements OnInit {
  isNew: boolean = true;
  title: string;
  
  id: number;
  objective: string;
  objectives: Objetivo[] = [];
  loadingObjectives: boolean = false;
  capacity: number;
  
  varbinaryImage: string;
  uploadedFiles: File[];
  uploadedFile: any[] = [];
  selectedfiles: any[];
  eventStatus: boolean;
  readableStatus: string;
  
  maxDate: Date;
  minDate: Date = new Date();
  dates: Date[] = [];
  disabledDates: Date[] = [];
  
  status: boolean;
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  addLoading = false;
  deleteLoading = false;

  @ViewChild(FileUpload) fileUpload: FileUpload
  
  areaText: string = '';
  areas: Area[];
  selectedArea: number[] = [];
  @ViewChild('areaMultiSelect') areaMultiSelect: MultiSelect;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private route: ActivatedRoute) {
    super();
  }

  get formIsValid(): boolean {
    return this.title !== '' && this.selectedArea?.length > 0 && this.dates[0] !== undefined && this.dates[1] !== undefined
      && (this.uploadedFiles !== undefined || this.uploadedFile?.length > 0);
  }
  
  changeStatus(): void {
    this.readableStatus = this.eventStatus ? 'Reservado' : 'Finalizado';
  }

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  loadAll(): void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {        
        this.loading = true;
        this.loadAreas();
        if (id) {
          this.id = id;
          this.loadInfo();
          this.loadObjectives();
        } else {
          this.loading = false;
        }        
      })
    );
  }

  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`EVENTO/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
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
  
  onUpload(event: any): void {
    for (let file of event.files) {
      this.uploadedFile.push(file);
    }
  }

  onSelectFile(event: { files: File[]; }) {
    this.uploadedFiles = [...<File[]>event.files];
    this.varbinaryImage = btoa(this.uploadedFiles[0].name);
    this.selectedfiles = this.uploadedFiles;
  }

  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .addOfURL(`EVENTO`, {
        imagen: this.varbinaryImage,
        titulo: this.title,
        capacidad: this.capacity,
        fh_Inicio: this.dates[0],
        fh_Finalizacion: this.dates[1],
        id_areaRealizacion: this.selectedArea[0],
        aprobado: true,
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
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
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`EVENTO/${this.id}`, {
        imagen: this.varbinaryImage === undefined ? btoa(this.uploadedFile[0]) : this.varbinaryImage,
        id_Evento: this.id,
        titulo: this.title,
        capacidad: this.capacity,
        aprobado: this.eventStatus,
        fh_Inicio: this.dates[0],
        fh_Finalizacion: this.dates[1],
        id_areaRealizacion: this.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
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
  
  uploadFile(): void {
    const formData = new FormData();
    
    let fileOfBlob;
    fileOfBlob = new File([this.uploadedFiles[0]], this.uploadedFiles[0].name, { type: 'application/png' });
    formData.append('file', fileOfBlob, fileOfBlob.name);
    
    this.subscription.add(
      this.catalogService.addOfURL("UploadImage", formData).subscribe(
        () =>{}
      )
    );
  }
  
  onDateChange(): void {
    if(this.dates[0] === null || this.dates[1] === null){
      return;
    }
    
    let insideDates: Date[] = [];
    const initialDate: Date = new Date(this.dates[0].getTime());
    
    while (this.dates[1] > initialDate || this.dates[1].getDate() === initialDate.getDate()) {
      insideDates.push(new Date(initialDate.getTime()));
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
          this.selectedArea.push(response.AREA.id_Area);
          this.dates = [new Date(response.fh_Inicio), new Date(response.fh_Finalizacion)];
          this.title = response.titulo;
          this.capacity = response.capacidad;
          this.eventStatus = response.aprobado;
          this.changeStatus();
          this.uploadedFile.push(response.imagen);
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

  areaFilter(event: any): void {
    this.areaText = event.filter;
  }
  
  areaChange(event: any): void {
    this.selectedArea = [event.itemValue];
    this.loadDisabledDates(event.itemValue);
  }
  
  loadDisabledDates(id: number): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('EVENTO', new HttpParams().set('id_areaRealizacion', id))
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
  
  loadAreas(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('AREA')
      .subscribe(
        (response: Area[]) => {
          this.areas = response;
        },
      )
    );
  }
  
  loadObjectives(): void {
    this.loadingObjectives = true;
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('OBJETIVOSXEVENTO', new HttpParams().set('id_Evento', this.id))
      .subscribe(
        (response: Objetivo[]) => {
          this.objectives = response;
          this.loadingObjectives = false;
        },
      )
    );
  }
  
  addObjective(objective: string, id?: number): void {
    if(id){
      this.updateObjective(objective, id);
      return;
    }
    this.subscription.add(
      this.catalogService
      .addOfURL(`OBJETIVOSXEVENTO`, {
        id_Evento: this.id,
        Objetivo: objective
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El objetivo fue agregado correctamente',
          });
          this.objective = '';
          setTimeout(() => {
            this.loadObjectives();
          }, 200);
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: '¡Error!',
            body: 'El objetivo no fue agregado',
          });
        }
      )
    );
  }
  
  updateObjective(objective: string, id: number): void {
    this.subscription.add(
      this.catalogService
      .updateOfURL(`OBJETIVOSXEVENTO/${id}`, {
        id_Objetivo: id,
        id_Evento: this.id,
        Objetivo: objective
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El objetivo fue editado correctamente',
          });
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: '¡Error!',
            body: 'El objetivo no fue editado',
          });
        }
      )
    );
  }

  deleteObjective(id: number | undefined){
    this.subscription.add(
      this.catalogService.deleteOfURL(`OBJETIVOSXEVENTO/${id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El evento fue eliminado con éxito',
          });
          this.loadObjectives();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el evento',
          });
        }
      )
    );
  }

  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
      { label: 'Evento', routerLink: [this.routeInformation.eventPage] },
    ];
  }

}
