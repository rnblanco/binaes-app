import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Autor, AutorxEjemplar, Editorial, Ejemplar, EtiquetaxEjemplar, Formatoejemplar, IdiomaEjemplar, P_Clave, TipoEtiqueta } from '../../../shared/models/exemplar';
import { Coleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { HttpParams } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { TagType } from '../../../shared/constants/tag-type';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';
import { UploadFileComponent } from '../../../shared/components/upload-file.component';

@Component({
  selector: 'app-exemplar-page',
  templateUrl: './exemplar-page.component.html',
})
export class ExemplarPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  DOI = TagType.DOI;
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  name: string;

  maxDate: Date;
  date: Date;
  addLoading = false;
  deleteLoading = false;
  
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
  
  constructor(
    private route: ActivatedRoute,
    public uploadFile: UploadFileComponent
  ) {
    super();
  }
  
  get formIsValid(): boolean {
    return this.name !== '' && this.selectedEditorial?.length > 0 && this.selectedIdioma?.length > 0 && this.selectedFormato?.length > 0
      && this.selectedCollection?.length > 0 && this.date !== undefined && (this.uploadFile.uploadedFiles !== undefined || this.uploadFile.uploadedFile?.length > 0);
  }
  
  ngOnInit(): void {
    this.uploadFile = new UploadFileComponent();
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
    this.maxDate = new Date();
    this.form = this.formBuilder.group({
      DOI: [
        undefined,
        [
          Validators.required,
          Validators.pattern(this.validatorService.DOIPattern),
        ],
      ],
    });
  }
  
  loadAll(): void {
    if (this.user.ROLUSUARIO.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.exemplarsPage])
      }, 50);      
    }
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
            title: 'No se pudo eliminar',
            body: 'El ejemplar tiene elementos relacionados',
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
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService.addOfURL(`EJEMPLAR`, {
        nombre: this.name,
        imagen: this.uploadFile.varbinaryImage,
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
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService.updateOfURL(`EJEMPLAR/${this.id}`, {
        id_Ejemplar: this.id,
        nombre: this.name,
        imagen: this.uploadFile.varbinaryImage === undefined ? btoa(this.uploadFile.uploadedFile[0]) : this.uploadFile.varbinaryImage,
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
          this.uploadFile.uploadedFile.push(response.imagen);
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
  
  public deleteEditorial(id: number): void {
    this.subscription.add(
      this.catalogService.deleteOfURL(`EDITORIAL/${id}`)
      .subscribe(
        ()=>{
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'Editorial eliminada correctamente',
          });
          this.loadEditoriales();
        }, ()=>{
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar la editorial',
          });
        }
      )
    )
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
  
  public deleteIdioma(id: number): void {
    this.subscription.add(
      this.catalogService.deleteOfURL(`IDIOMAEJEMPLAR/${id}`)
      .subscribe(
        ()=>{
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'Idioma eliminado correctamente',
          });
          this.loadIdioma();
        }, ()=>{
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el idioma',
          });
        }
      )
    )
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
  
  authorChange(event: any, authorMultiSelect: MultiSelect): void {
    if (this.selectedAuthorsxExemplar.includes(event.itemValue)) {
      const deleteAuthor = this.authorsxExemplar.find((authorxExemplar) => authorxExemplar.AUTOR.id_Autor === event.itemValue);
      this.deleteAuthorToExemplar(deleteAuthor?.id_autorEjemplar || 0);
    } else {
      this.addAuthorToExemplar(event.itemValue, authorMultiSelect);
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
  
  addAuthor(authorMultiSelect: MultiSelect): void {
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
          this.addAuthorToExemplar(exemplar.id_Autor, authorMultiSelect);
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
  
  public deleteAuthor(event: any, id: number): void {
    event.stopPropagation();
    const deleteAuthor = this.authorsxExemplar.find((authorxExemplar) => authorxExemplar.AUTOR.id_Autor === id);
    this.subscription.add(
      this.catalogService.deleteOfURL(`AUTORXEJEMPLAR/${deleteAuthor?.id_autorEjemplar || 0}`).subscribe(
        () => {
          this.realDeleteAuthor(id);
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el autor del ejemplar porque tiene datos relacionados',
          });
        }
      )
    );
  }
  
  realDeleteAuthor(id: number){
    this.subscription.add(
      this.catalogService.deleteOfURL(`AUTOR/${id}`)
      .subscribe(
        ()=>{
          this.messageService.setPayload({
            type: 'success',
            title: '¡Éxito!',
            body: 'Autor eliminado correctamente',
          });
          this.loadAuthors();
        }, ()=>{
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el autor porque tiene elementos relacionados',
          });
        }
      )
    )
  }
  
  addAuthorToExemplar(id: number, authorMultiSelect: MultiSelect): void {
    this.subscription.add(
      this.catalogService.addOfURL('AUTORXEJEMPLAR', {
        id_Autor: id,
        id_Ejemplar: this.id
      }).subscribe(
        () => {
          this.loadAuthors();
          authorMultiSelect.hide();
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
