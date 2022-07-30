import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { PaginadorEjemplar } from '../../../shared/models/exemplar';
import { Roles } from '../../../auth/constants/roles';
import { TagType } from 'src/app/shared/constants/tag-type';

@Component({
  selector: 'app-exemplars-page',
  templateUrl: './exemplars-page.component.html',
})
export class ExemplarsPageComponent extends LazyComponent implements OnInit {
  tagType = TagType;
  USER = Roles.USER;

  constructor() {
    super();
  }
  
  cols = [
    { field: 'nombre', header: 'Nombre', width: 120 },
    { field: 'imagen', header: 'Imagen', width: 80 },
    { field: 'EDITORIAL.editorial1', header: 'Editorial', width: 100 },
    { field: 'FORMATOEJEMPLAR.formato', header: 'Formato', width: 90 },
    { field: 'IDIOMAEJEMPLAR.idioma', header: 'Idioma', width: 90 },
    { field: 'COLECCION.nombre', header: 'Colección', width: 120 },
    { field: 'p_clave', header: 'Palabra(s)', width: 120 },
    { field: 'autorE', header: 'Autor(es)', width: 120 },
    { field: 'etiqueta_E', header: 'Etiqueta(s)', width: 120 },
    { field: 'f_publicacion', header: 'Publicación', width: 120 },
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
