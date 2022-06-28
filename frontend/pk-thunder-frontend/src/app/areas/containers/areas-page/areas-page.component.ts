import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Roles } from '../../../auth/constants/roles';
import { Area } from '../../../shared/models/event';

@Component({
  selector: 'app-areas-page',
  templateUrl: './areas-page.component.html',
  styles: [
  ]
})
export class AreasPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;
  
  constructor() {
    super();
  }
  
  cols = [
    { field: 'nombre', header: 'Nombre', width: 100 },
    { field: 'descripcion', header: 'Descripción', width: 100 },
    { field: 'USUARIO.nombre', header: 'Responsable', width: 100 },
    { field: 'capacidad', header: 'Capacidad', width: 100 },
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
      .getByNameWithParams('AREA', this.httpParams)
      .subscribe(
        (response: Area[]) => {
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
      `${this.routeInformation.areaPage}/`,
    ]);
  }
  
  onRowSelect({data}: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.areaPage}/${data.id_Area}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Áreas', routerLink: [this.routeInformation.areasPage] },
    ];
  }
  
}
