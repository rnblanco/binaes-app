import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Ejemplar, Editorial, Formatoejemplar, IdiomaEjemplar, P_Clave, Autor, AutorxEjemplar, EtiquetaxEjemplar, TipoEtiqueta } from '../../../shared/models/exemplar';
import { Coleccion, Tipocoleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { FileUpload } from 'primeng/fileupload'
import { HttpParams } from '@angular/common/http';

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
  
  keywordText: string = '';
  keywords: P_Clave[];
  selectedKeywords: number[] = [];
  @ViewChild('keywordMultiSelect') keywordMultiSelect: MultiSelect;
  
  authorText: string = '';
  authors: Autor[];
  selectedAuthors: number[] = [];
  selectedAuthorsxExemplar: number[] = [];
  authorsxExemplar: AutorxEjemplar[];
  @ViewChild('authorMultiSelect') authorMultiSelect: MultiSelect;
  
  tagsxExemplar: EtiquetaxEjemplar[];
  selectedTags: number[] = [];
  tagTypes: TipoEtiqueta[];
  tagName: string;
  @ViewChild('tagMultiSelect') tagMultiSelect: MultiSelect;
  
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private route: ActivatedRoute) {
    super();
  }
  
  get formIsValid(): boolean {
    return this.name !== '' && this.selectedEditorial?.length > 0 && this.selectedIdioma?.length > 0 && this.selectedFormato?.length > 0
      && this.selectedCollection?.length > 0 && this.date !== undefined && (this.uploadedFiles !== undefined || this.uploadedFile?.length > 0);
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
    this.maxDate = new Date();
  }
  
  loadAll(): void {
    this.subscription.add(
      this.route.params.subscribe(({id}: Params) => {
        this.loading = true;
        this.loadEditoriales();
        this.loadIdioma();
        this.loadFormatos();
        this.loadCollections();
        this.loadTagTypes();
        if (id) {
          this.id = id;
          this.loadInfo();
          this.loadKeywords();
          this.loadAuthors();
          this.loadTags();
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
      this.catalogService.addOfURL(`EJEMPLAR`, {
        nombre: this.name,
        imagen: this.varbinaryImage,
        f_publicacion: this.date,
        id_Idioma: this.selectedIdioma[0],
        id_Formato: this.selectedFormato[0],
        id_Editorial: this.selectedEditorial[0],
        id_coleccionPertenece: this.selectedCollection[0],
      }).subscribe(
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
      this.catalogService.updateOfURL(`EJEMPLAR/${this.id}`, {
        id_Ejemplar: this.id,
        nombre: this.name,
        imagen: this.varbinaryImage === undefined ? btoa(this.uploadedFile[0]) : this.varbinaryImage,
        f_publicacion: this.date,
        id_Idioma: this.selectedIdioma[0],
        id_Formato: this.selectedFormato[0],
        id_Editorial: this.selectedEditorial[0],
        id_coleccionPertenece: this.selectedCollection[0],
      }).subscribe(
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
            body: 'No se pudo editar el ejemplar',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  uploadFile(): void {
    const formData = new FormData();
    
    let fileOfBlob;
    fileOfBlob = new File([this.uploadedFiles[0]], this.uploadedFiles[0].name, {type: 'application/png'});
    formData.append('file', fileOfBlob, fileOfBlob.name);
    
    this.subscription.add(
      this.catalogService.addOfURL("UploadImage", formData).subscribe(
        () => {}
      )
    );
  }
  
  loadInfo(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams(`EJEMPLAR/${this.id}`).subscribe(
        (response: Ejemplar) => {
          if (response) {
            this.isNew = false;
          }
          this.id = response.id_Ejemplar;
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
      this.catalogService.addOfURL('EDITORIAL', {editorial1: this.editorialText}).subscribe(
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
      this.catalogService.getByNameWithParams('EDITORIAL').subscribe(
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
      this.catalogService.addOfURL('IDIOMAEJEMPLAR', {idioma: this.idiomaText}).subscribe(
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
      this.catalogService.getByNameWithParams('IDIOMAEJEMPLAR').subscribe(
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
      this.catalogService.getByNameWithParams('FORMATOEJEMPLAR').subscribe(
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
    this.selectedCollection = [event.itemValue];
  }
  
  loadCollections(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams('COLECCION').subscribe(
        (response: Coleccion[]) => {
          this.collections = response;
        },
      )
    );
  }
  
  keywordsFilter(event: any) {
    this.keywordText = event.filter;
  }
  
  keywordsChange(event: any) {
    if (this.keywords.map(keyword => keyword.id_p_Clave).includes(event.itemValue)) {
      this.deleteKeyword(event.itemValue);
    }
  }
  
  loadKeywords(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams('P_CLAVEXEJEMPLAR', new HttpParams().set('id_Ejemplar', this.id)).subscribe(
        (response: P_Clave[]) => {
          this.keywords = response;
          this.selectedKeywords = response.map((keyword) => keyword.id_p_Clave);
        },
      )
    );
  }
  
  addKeyword(): void {
    this.subscription.add(
      this.catalogService.addOfURL('P_CLAVEXEJEMPLAR', {
        p_clave: this.keywordText,
        id_Ejemplar: this.id
      }).subscribe(
        () => {
          this.loadKeywords();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo agregar la palabra clave',
          });
        }
      )
    );
  }
  
  deleteKeyword(id: number): void {
    this.subscription.add(
      this.catalogService.deleteOfURL(`P_CLAVEXEJEMPLAR/${id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La palabra clave fue eliminado con éxito',
          });
          this.loadKeywords();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar la palabra clave',
          });
        }
      )
    );
  }
  
  authorFilter(event: any): void {
    this.authorText = event.filter;
  }
  
  authorChange(event: any): void {
    if (this.selectedAuthorsxExemplar.includes(event.itemValue)) {
      const deleteAuthor = this.authorsxExemplar.find((authorxExemplar) => authorxExemplar.AUTOR.id_Autor === event.itemValue);
      this.deleteAuthorToExemplar(deleteAuthor?.id_autorEjemplar || 0);
    } else {
      this.addAuthorToExemplar(event.itemValue);
    }
  }
  
  loadAuthors(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams('AUTOR').subscribe(
        (response: Autor[]) => {
          this.authors = response;
          this.loadSelectedAuthors();
        },
      )
    );
  }
  
  loadSelectedAuthors(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams(`AUTORXEJEMPLAR`, new HttpParams().set('id_Ejemplar', this.id)).subscribe(
        (response: AutorxEjemplar[]) => {
          this.authorsxExemplar = response;
          this.selectedAuthors = this.authorsxExemplar.map(author => author.AUTOR.id_Autor);
          this.selectedAuthorsxExemplar = [...this.selectedAuthors];
        },
      )
    );
  }
  
  addAuthor(): void {
    this.subscription.add(
      this.catalogService.addOfURL('AUTOR', {
        nombre: this.authorText,
        id_Autor: this.id
      }).subscribe(
        (exemplar: Autor) => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El autor fue agregado con éxito',
          });
          this.addAuthorToExemplar(exemplar.id_Autor);
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo agregar el autor',
          });
        }
      )
    );
  }
  
  deleteAuthorToExemplar(id: number): void {
    this.subscription.add(
      this.catalogService.deleteOfURL(`AUTORXEJEMPLAR/${id}`).subscribe(
        () => {
          this.loadAuthors();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el autor del ejemplar',
          });
        }
      )
    );
  }
  
  addAuthorToExemplar(id: number): void {
    this.subscription.add(
      this.catalogService.addOfURL('AUTORXEJEMPLAR', {
        id_Autor: id,
        id_Ejemplar: this.id
      }).subscribe(
        () => {
          this.loadAuthors();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo agregar el autor',
          });
        }
      )
    );
  }
  
  loadTags(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams(`ETIQUETASXEJEMPLAR/`, new HttpParams().set('id_Ejemplar', this.id)).subscribe(
        (response: EtiquetaxEjemplar[]) => {
          this.tagsxExemplar = response;
          this.selectedTags = this.tagsxExemplar.map(tag => tag.id_etiquetaEjemplar);
        },
      )
    );
  }
  
  deleteTagToExemplar(id: number): void {
    this.subscription.add(
      this.catalogService.deleteOfURL(`ETIQUETASXEJEMPLAR/${id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: 'Éxito',
            body: 'Se eliminó la etiqueta correctamente',
          });
          this.loadTags();
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar correctamente la etiqueta',
          });
        }
      )
    );
  }
  
  loadTagTypes(): void {
    this.subscription.add(
      this.catalogService.getByNameWithParams(`TIPOETIQUETA`).subscribe(
        (response: TipoEtiqueta[]) => {
          this.tagTypes = response;
        },
      )
    );
  }
  
  addTag(typeTag: number): void {
    this.subscription.add(
      this.catalogService.addOfURL('ETIQUETASXEJEMPLAR', {
        id_tipoEtiqueta: typeTag,
        etiqueta: this.tagName,
        id_Ejemplar: this.id
      }).subscribe(
        (exemplar: Autor) => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La etiqueta fue agregada correctamente',
          });
          this.loadTags();
          this.tagName = '';
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo agregar la etiqueta',
          });
        }
      )
    );
  }
  
  tagChange(event: any): void {
    this.deleteTagToExemplar(event.itemValue)
  }
  
  onMask(event: string): void {
    this.tagName = event;
  }

  tabChange(){
    this.tagName = '';
  }

  getBreadCrumbs() {
    return [
      { label: 'Ejemplares', routerLink: [this.routeInformation.exemplarsPage] },
      { label: 'Ejemplar', routerLink: [this.routeInformation.exemplarPage] },
    ];
  }
}
