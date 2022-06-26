import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Coleccion } from '../../../shared/models/collection';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-collections-page',
  templateUrl: './collections-page.component.html',
})
export class CollectionsPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;
  
  constructor() {
    super();
  }
  
  cols = [
    { field: 'nombre', header: 'Nombre', width: 100 },
    { field: 'TIPOCOLECCION.tipoColeccion1', header: 'Tipo', width: 100 },
    { field: 'GENEROCOLECCION.generoColeccion1', header: 'Género', width: 150 },
    { field: 'AREA.nombre', header: 'Área', width: 175 },
  ] as any[];
  
  ngOnInit(): void {
    this.loadAll();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadAll() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('COLECCION', this.httpParams)
      .subscribe(
        (response: Coleccion[]) => {
          // this.pagination = _response.meta;
          // this.currentPage = this.pagination.currentPage;
          this.list = response;
          this.loading = false;
        },
        () => (this.loading = false)
      )
    );
  }
  
  onLazyLoad(pagination: any): void {
    this.paginate(pagination);
    this.loadAll();
  }
  
  onNew(){
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.collectionPage}/`,
    ]);
  }
  
  onRowSelect({data}: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.collectionPage}/${data.id_Coleccion}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Colecciones', routerLink: [this.routeInformation.collectionsPage] },
    ];
  }
}
