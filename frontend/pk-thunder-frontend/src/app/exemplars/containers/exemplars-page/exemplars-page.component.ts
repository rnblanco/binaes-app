import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Ejemplar, PaginadorEjemplar } from '../../../shared/models/exemplar';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-exemplars-page',
  templateUrl: './exemplars-page.component.html',
})
export class ExemplarsPageComponent extends LazyComponent implements OnInit {

  USER = Roles.USER;

  constructor() {
    super();
  }
  
  cols = [
    { field: 'nombre', header: 'Nombre', width: 100 },
    { field: 'imagen', header: 'Imagen', width: 100 },
    { field: 'EDITORIAL.editorial', header: 'Editorial', width: 150 },
    { field: 'FORMATOEJEMPLAR.formato', header: 'Formato', width: 50 },
    { field: 'IDIOMAEJEMPLAR.idioma', header: 'Idioma', width: 50 },
    { field: 'COLECCION.nombre', header: 'Colección', width: 175 },
    { field: 'P_CLAVExEJEMPLAR', header: 'Palabra(s)', width: 175 },
    { field: 'AUTORxEJEMPLAR.AUTOR.nombre', header: 'Autor(es)', width: 175 },
    { field: 'ETIQUETASxEJEMPLAR.etiqueta', header: 'Etiqueta(s)', width: 175 },
    { field: 'f_publicacion', header: 'Publicación', width: 175 },
  ] as any[];

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  loadAll() {
    this.list = [];
    this.loading = true;
    this.getPaginationParams();
    this.subscription.add(
      this.catalogService
        .getByNameWithParams('EJEMPLAR', this.httpParams)
        .subscribe(
          (response: PaginadorEjemplar) => {
            this.pagination = response.meta;
            this.currentPage = this.pagination.currentPage;
            this.list = response.data;            
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

  onNew() {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.exemplarPage}/`,
    ]);
  }

  onRowSelect({ data }: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.exemplarPage}/${data.id_Ejemplar}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Ejemplares', routerLink: [this.routeInformation.exemplarsPage] },
    ];
  }

}
