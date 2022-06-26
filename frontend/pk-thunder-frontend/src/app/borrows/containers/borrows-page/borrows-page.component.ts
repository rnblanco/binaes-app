import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../auth/constants/roles';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Prestamo } from '../../../shared/models/borrow';

@Component({
  selector: 'app-borrows-page',
  templateUrl: './borrows-page.component.html',
})
export class BorrowsPageComponent extends LazyComponent implements OnInit {
  
  USER = Roles.USER;
  
  constructor() {
    super();
  }
  
  cols = [
    { field: 'EJEMPLAR.nombre', header: 'Nombre', width: 125 },
    { field: 'USUARIO.nombre', header: 'Usuario', width: 125 },
    { field: 'ESTADOS.estado', header: 'Estado', width: 100 },
    { field: 'fh_Prestamo', header: 'Préstamo', width: 100 },
    { field: 'fh_Devolucion', header: 'Devolución', width: 100 },
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
      .getByNameWithParams('PRESTAMO', this.httpParams)
      .subscribe(
        (response: Prestamo[]) => {
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
      `${this.routeInformation.borrowPage}/`,
    ]);
  }
  
  onRowSelect({data}: any) {
    if (this.user.id_rolUsuario === Roles.USER) {
      return;
    }
    this.router.navigate([
      `${this.routeInformation.borrowPage}/${data.id_Prestamo}/`,
    ]);
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Préstamos', routerLink: [this.routeInformation.borrowsPage] },
    ];
  }

}
