import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Objetivo, Evento, Area } from '../../../shared/models/event';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { FileUpload } from 'primeng/fileupload'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
})

export class EventPageComponent extends BaseComponent implements OnInit {

  isNew: boolean = true;
  title: string;
  id: number;
  objective: string;
  capacity: number;
  varbinaryImage: string;
  uploadedFiles: File[];
  uploadedFile: any[] = [];
  selectedfiles: any[];
  maxDate: Date;
  begdate: Date;
  enddate: Date;
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

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    super();
  }

  get formIsValid(): boolean {
    return this.title !== '' && this.selectedArea.length > 0 && this.begdate != undefined && this.enddate != undefined;
  }

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
    this.maxDate = new Date();
  }

  loadAll(): void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {        
        this.loading = true;
        this.loadAreas();
        if (id) {
          this.id = id;
          this.loadInfo();
        } else {
          this.loading = false;
        }        
      })
    );
  }

  deleteEvent(): void {
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
      console.log(this.uploadedFile[0]);
    }
  }

  onSelectFile(event: { files: File[]; }) {
    this.uploadedFiles = [...<File[]>event.files];
    this.varbinaryImage = btoa("https://localhost:44314/images/" + this.uploadedFiles[0].name);
    this.selectedfiles = this.uploadedFiles;   
  }

  addEvent(): void {
    if (!this.isNew) {
      this.updateEvent();
      return;
    }
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .addOfURL(`EVENTO`, {        
        titulo: this.title,
        imagen: this.varbinaryImage,
        capacidad: this.capacity,
        fh_Inicio: this.begdate,
        fh_Finalizacion: this.enddate,                   
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

  updateEvent(): void {
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`EVENTO/${this.id}`, {
        id_Evento: this.id,
        titulo: this.title,
        imagen: this.uploadedFiles ? this.varbinaryImage : btoa(this.uploadedFile[0]),
        capacidad: this.capacity,
        aprobado: true,
        fh_Inicio: this.begdate,
        fh_Finalizacion: this.enddate,                        
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
            body: 'No se pudo añadir el evento',
          });
          this.addLoading = false;
        }
      )
    );
  }

  uploadFile(): void {
    const formData = new FormData();
    var fileOfBlob = null;    
         
    fileOfBlob = new File([this.uploadedFiles[0]], this.uploadedFiles[0].name, { type: 'application/png' });
    console.log(fileOfBlob);
    formData.append('file', fileOfBlob, fileOfBlob.name);
    console.log(formData.get('file'));
    this.http.post('https://localhost:44314/api/UploadImage', formData)
      .subscribe(event => {
        console.log(event);
      });
   
  }

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`EVENTO/${this.id}`)
      .subscribe(
        (response: Evento) => {
          if (response.id_Evento) {
            this.isNew = false;
          }
          this.selectedArea.push(response.AREA.id_Area);
          this.begdate = new Date(response.fh_Inicio);
          this.enddate = new Date(response.fh_Finalizacion);            
          this.title = response.titulo;
          this.capacity = response.capacidad;
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
    if(event.value.length > 1){
      this.selectedArea.shift();
    }
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

  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
      { label: 'Evento', routerLink: [this.routeInformation.eventPage] },
    ];
  }

}
