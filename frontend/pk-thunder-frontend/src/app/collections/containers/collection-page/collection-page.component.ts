import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Area, Coleccion, Generocoleccion, Tipocoleccion } from '../../../shared/models/collection';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
})
export class CollectionPageComponent extends BaseComponent implements OnInit {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  name: string;
  
  addLoading = false;
  deleteLoading = false;
  
  typeText: string ='';
  types: Tipocoleccion[];
  selectedType: number[] = [];
  @ViewChild('typeMultiSelect') typeMultiSelect: MultiSelect;
  
  genreText: string ='';
  genres: Generocoleccion[];
  selectedGenre: number[] = [];
  @ViewChild('genreMultiSelect') genreMultiSelect: MultiSelect;
  
  areaText: string ='';
  areas: Area[];
  selectedArea: number[] = [];
  @ViewChild('areaMultiSelect') areaMultiSelect: MultiSelect;
  
  constructor(private route: ActivatedRoute) {
    super();
  }
  
  get formIsValid(): boolean{
    return this.name !== '' && this.selectedType?.length > 0 && this.selectedGenre?.length > 0 && this.selectedArea?.length > 0;
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
        this.router.navigate([RouteInformation.collectionsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.loadTypes();
        this.loadGenres();
        this.loadAreas();
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
        id_tipoColeccion: this.selectedType[0],
        id_generoColeccion: this.selectedGenre[0],
        id_areaPertenece: this.selectedArea[0],
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
        id_tipoColeccion: this.selectedType[0],
        id_generoColeccion: this.selectedGenre[0],
        id_areaPertenece: this.selectedArea[0],
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
          this.selectedArea = [response.AREA.id_Area];
          this.selectedGenre = [response.GENEROCOLECCION.id_generoColeccion];
          this.selectedType = [response.TIPOCOLECCION.id_tipoColeccion];
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
  
  typeFilter(event: any): void {
    this.typeText = event.filter;
  }
  
  typeChange(event: any): void {
    this.selectedType = [event.itemValue];
  }
  
  addType(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('TIPOCOLECCION', {tipoColeccion1: this.typeText})
      .subscribe(
        (response: Tipocoleccion) => {
          this.loadTypes();
          this.typeMultiSelect.close(new Event('close'));
          this.selectedType = [response.id_tipoColeccion];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el tipo',
          });
        }
      )
    );
  }
  
  loadTypes(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('TIPOCOLECCION')
      .subscribe(
        (response: Tipocoleccion[]) => {
          this.types = response;
        },
      )
    );
  }
  
  genreFilter(event: any): void {
    this.genreText = event.filter;
  }
  
  genreChange(event: any): void {
    this.selectedGenre = [event.itemValue];
  }
  
  addGenre(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('GENEROCOLECCION', { generoColeccion1: this.genreText})
      .subscribe(
        (response: Generocoleccion) => {
          this.loadGenres();
          this.genreMultiSelect.close(new Event('close'));
          this.selectedGenre = [response.id_generoColeccion];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el género',
          });
        }
      )
    );
  }
  
  loadGenres(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('GENEROCOLECCION')
      .subscribe(
        (response: Generocoleccion[]) => {
          this.genres = response;
        },
      )
    );
  }
  
  areaFilter(event: any): void {
    this.areaText = event.filter;
  }
  
  areaChange(event: any): void {
    this.selectedArea = [event.itemValue];
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
      { label: 'Colecciones', routerLink: [this.routeInformation.collectionsPage] },
      { label: 'Colección', routerLink: [this.routeInformation.collectionPage] }
    ];
  }

}
