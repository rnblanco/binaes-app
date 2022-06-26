import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Ejemplar, Editorial, Formatoejemplar, IdiomaEjemplar } from '../../../shared/models/exemplar';
import { Coleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { FileUpload } from 'primeng/fileupload'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exemplar-page',
  templateUrl: './exemplar-page.component.html',
})
export class ExemplarPageComponent extends BaseComponent implements OnInit {

  isNew: boolean = true;
  name: string;
  id: number;
  varbinaryImage: string;
  uploadedFiles: File[];
  uploadedFile: any[] = [];
  selectedfiles: any[];
  maxDate: Date;
  date: Date;
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  addLoading = false;
  deleteLoading = false;

  
  @ViewChild(FileUpload) fileUpload: FileUpload

  editorialText: string = '';
  editoriales: Editorial[];
  selectedEditorial: number[] = [];
  @ViewChild('editorialMultiSelect') editorialMultiSelect: MultiSelect;

  collectionText: string = '';
  collections: Coleccion[];
  selectedCollection: number[] = [];
  @ViewChild('collectionMultiSelect') collectionMultiSelect: MultiSelect;

  formatoText: string = '';
  formatos: Formatoejemplar[];
  selectedFormato: number[] = [];
  @ViewChild('formatoMultiSelect') formatoMultiSelect: MultiSelect;

  idiomaText: string = '';
  idiomas: IdiomaEjemplar[];
  selectedIdioma: number[] = [];
  @ViewChild('idiomaMultiSelect') idiomaMultiSelect: MultiSelect;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    super();
  }

  get formIsValid(): boolean {
    return this.name !== '' && this.selectedEditorial.length > 0 && this.selectedIdioma.length > 0 && this.selectedFormato.length > 0 && this.selectedCollection.length > 0 && this.date != undefined && (this.uploadedFiles != undefined || this.uploadedFile.length > 0);
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
        this.loadEditoriales();
        this.loadIdioma();
        this.loadFormatos();
        this.loadCollections();
        if (id) {
          this.id = id;
          this.loadInfo();
        } else {
          this.loading = false;
        }        
      })
    );
  }

  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`EJEMPLAR/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El ejemplar fue eliminado con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.exemplarsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el ejemplar',
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
      .addOfURL(`EJEMPLAR`, {        
        nombre: this.name,
        imagen: this.varbinaryImage,
        f_publicacion: this.date,          
        id_Idioma: this.selectedIdioma[0],                   
        id_Formato: this.selectedFormato[0],
        id_Editorial: this.selectedEditorial[0],
        id_coleccionPertenece: this.selectedCollection[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El ejemplar fue añadido satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.exemplarsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el ejemplar',
          });
          this.addLoading = false;
        }
      )
    );
  }

  update(): void {
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`EJEMPLAR/${this.id}`, {
        id_Ejemplar: this.id,
        nombre: this.name,
        imagen: this.varbinaryImage === undefined ? btoa(this.uploadedFile[0]) : this.varbinaryImage,
        f_publicacion: this.date,
        id_Idioma: this.selectedIdioma[0],
        id_Formato: this.selectedFormato[0],
        id_Editorial: this.selectedEditorial[0],
        id_coleccionPertenece: this.selectedCollection[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El ejemplar fue editado satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.exemplarsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el ejemplar',
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

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`EJEMPLAR/${this.id}`)
      .subscribe(
        (response: Ejemplar) => {
          if (response.id_Ejemplar) {
            this.isNew = false;
          }
          this.selectedCollection.push(response.COLECCION.id_Coleccion);
          this.date = new Date(response.f_publicacion);            
          this.name = response.nombre;
          this.selectedFormato.push(response.FORMATOEJEMPLAR.id_formatoEjemplar);
          this.selectedIdioma.push(response.IDIOMAEJEMPLAR.id_idiomaEjemplar);
          this.selectedEditorial.push(response.EDITORIAL.id_Editorial);
          this.uploadedFile.push(response.imagen);
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.exemplarPage]);
        }
      )
    );
  }

  editorialFilter(event: any): void {
    this.editorialText = event.filter;
  }

  editorialChange(event: any): void {
    this.selectedEditorial = [event.itemValue];
  }

  addEditorial(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('EDITORIAL', { editorial1: this.editorialText })
      .subscribe(
        (response: Editorial) => {
          this.loadEditoriales();
          this.editorialMultiSelect.close(new Event('close'));
            
          this.selectedEditorial = [response.id_Editorial];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir la editorial',
          });
        }
      )
    );
  }

  loadEditoriales(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('EDITORIAL')
      .subscribe(
        (response: Editorial[]) => {
          this.editoriales = response;
        },
      )
    );
  }

  idiomaFilter(event: any): void {
    this.idiomaText = event.filter;
  }

  idiomaChange(event: any): void {
    this.selectedIdioma = [event.itemValue];
  }

  addIdioma(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('IDIOMAEJEMPLAR', { idioma: this.idiomaText })
      .subscribe(
        (response: IdiomaEjemplar) => {
          this.loadIdioma();
          this.idiomaMultiSelect.close(new Event('close'));
          this.selectedIdioma = [response.id_idiomaEjemplar];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el idioma',
          });
        }
      )
    );
  }

  loadIdioma(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('IDIOMAEJEMPLAR')
        .subscribe(
          (response: IdiomaEjemplar[]) => {
            this.idiomas = response;
          },
        )
    );
  }

  formatoFilter(event: any): void {
    this.formatoText = event.filter;
  }

  formatoChange(event: any): void {
    this.selectedFormato = [event.itemValue];
  }

  loadFormatos(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('FORMATOEJEMPLAR')
        .subscribe(
          (response: Formatoejemplar[]) => {
            this.formatos = response;
          },
        )
    );
  }

  collectionFilter(event: any): void {
    this.collectionText = event.filter;
  }

  collectionChange(event: any): void {
    if (event.value.length > 1) {
      this.selectedCollection.shift();
    }
  }

  loadCollections(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('COLECCION')
        .subscribe(
          (response: Coleccion[]) => {
            this.collections = response;
          },
        )
    );
  }


  getBreadCrumbs() {
    return [
      { label: 'Ejemplares', routerLink: [this.routeInformation.exemplarsPage] },
      { label: 'Ejemplar', routerLink: [this.routeInformation.exemplarPage] },
    ];
  }

}
