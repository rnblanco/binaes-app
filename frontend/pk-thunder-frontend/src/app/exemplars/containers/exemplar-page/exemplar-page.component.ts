import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Exemplar, Editorial, Formatoejemplar, IdiomaEjemplar } from '../../../shared/models/exemplar';
import { Coleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-exemplar-page',
  templateUrl: './exemplar-page.component.html',
})
export class ExemplarPageComponent extends BaseComponent implements OnInit {

  isNew: boolean = true;
  name: string;
  id: number;
  maxDate: Date;
  date: Date;
  SUPER_ADMIN = Roles.SUPER_ADMIN;
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

  constructor(private route: ActivatedRoute) {
    super();
  }

  get formIsValid(): boolean {
    return this.name !== '' && this.selectedEditorial.length > 0 && this.selectedIdioma.length > 0 && this.selectedFormato.length > 0 && this.selectedCollection.length > 0 && this.date != undefined;
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
        }
      })
    );
  }

  deleteCollection(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`EJEMPLAR/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El ejemplar fue eliminada con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.collectionsPage])
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

  addCollection(): void {
    console.log(this.date.toISOString());
    if (!this.isNew) {
      this.updateEjemplar();
      return;
    }
    /*this.addLoading = true;
    this.subscription.add(
      this.catalogService
        .addOfURL(`EJEMPLAR`, {
          nombre: this.name,
          id_tipoColeccion: this.selectedEditorial[0],
          id_generoColeccion: this.selectedIdioma[0],
          id_areaPertenece: this.selectedFormato[0],
        })
        .subscribe(
          () => {
            this.messageService.setPayload({
              type: 'success',
              title: '¡Exito!',
              body: 'El ejemplar fue añadido satifactoriamente',
            });
            setTimeout(() => {
              this.router.navigate([RouteInformation.collectionsPage])
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
    );*/
  }

  updateEjemplar(): void {
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
        .updateOfURL(`EJEMPLAR/${this.id}`, {
          id_Coleccion: this.id,
          nombre: this.name,
          id_Editorial: this.selectedEditorial[0],
          id_generoColeccion: this.selectedIdioma[0],
          id_Formato: this.selectedFormato[0],
        })
        .subscribe(
          () => {
            this.messageService.setPayload({
              type: 'success',
              title: '¡Exito!',
              body: 'El ejemplar fue editado satifactoriamente',
            });
            setTimeout(() => {
              this.router.navigate([RouteInformation.collectionsPage])
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

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams(`EJEMPLAR/${this.id}`)
        .subscribe(
          (response: Exemplar) => {
            if (response.nombre) {
              this.isNew = false;
            }
            this.selectedCollection.push(response.COLECCION.id_Coleccion);
            this.date = new Date(response.f_publicacion);            
            this.name = response.nombre;
            this.selectedFormato.push(response.FORMATOEJEMPLAR.id_formatoEjemplar);
            this.selectedIdioma.push(response.IDIOMAEJEMPLAR.id_idiomaEjemplar);
            this.selectedEditorial.push(response.EDITORIAL.id_Editorial);
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
    if (event.value.length > 1) {
      this.selectedEditorial.shift();
    }
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
    if (event.value.length > 1) {
      this.selectedIdioma.shift();
    }
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
    if (event.value.length > 1) {
      this.selectedFormato.shift();
    }
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
