import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Coleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { AreaSelectComponent } from '../../../areas/components/area-select.component';
import { GenreSelectComponent } from '../../components/genre-select.component';
import { TypeCollectionSelectComponent } from '../../components/type-collection-select.component';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
})
export class CollectionPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  name: string;
  
  addLoading = false;
  deleteLoading = false;
  
  constructor(
    private route: ActivatedRoute,
    public areaSelect: AreaSelectComponent,
    public genreSelect: GenreSelectComponent,
    public typeCollectionSelect: TypeCollectionSelectComponent
  ) {
    super();
  }

  ngOnInit(): void {
    this.areaSelect = new AreaSelectComponent();
    this.genreSelect = new GenreSelectComponent();
    this.typeCollectionSelect = new TypeCollectionSelectComponent();
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  get formIsValid(): boolean{
    return this.name !== '' && this.typeCollectionSelect.selectedType?.length > 0 && this.genreSelect.selectedGenre?.length > 0 && this.areaSelect.selectedArea?.length > 0;
  }
  
  loadAll(): void {
    if (this.user.ROLUSUARIO.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.collectionsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.typeCollectionSelect.loadCollectionTypes();
        this.genreSelect.loadGenres();
        this.areaSelect.loadAreas();        
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
      .getByNameWithParams(`COLECCION/${this.id}`)
      .subscribe(
        (response: Coleccion) => {
          if (response.nombre) {
            this.isNew = false;
          }
          this.name = response.nombre;
          this.areaSelect.selectedArea = [response.AREA.id_Area];
          this.genreSelect.selectedGenre = [response.GENEROCOLECCION.id_generoColeccion];
          this.typeCollectionSelect.selectedType = [response.TIPOCOLECCION.id_tipoColeccion];
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.collectionPage]);
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
      .addOfURL(`COLECCION`, {
        nombre: this.name,
        id_tipoColeccion: this.typeCollectionSelect.selectedType[0],
        id_generoColeccion: this.genreSelect.selectedGenre[0],
        id_areaPertenece: this.areaSelect.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La colección fue añadida satifactoriamente',
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
            body: 'No se pudo añadir la colección',
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
      .updateOfURL(`COLECCION/${this.id}`, {
        id_Coleccion: this.id,
        nombre: this.name,
        id_tipoColeccion: this.typeCollectionSelect.selectedType[0],
        id_generoColeccion: this.genreSelect.selectedGenre[0],
        id_areaPertenece: this.areaSelect.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La colección fue editada satifactoriamente',
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
            body: 'No se pudo editar la colección',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`COLECCION/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La colección fue eliminada con éxito',
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
            body: 'No se pudo eliminar la colección',
          });
          this.deleteLoading = false;
        }
      )
    );
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Colecciones', routerLink: [this.routeInformation.collectionsPage] },
      { label: 'Colección', routerLink: [this.routeInformation.collectionPage] }
    ];
  }
}
