import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { Visita } from 'src/app/shared/models/visit';
import { PageComponent } from '../../../shared/models/component-interfaces';
import { AreaSelectComponent } from '../../../areas/components/area-select.component';
import { UserSelectComponent } from '../../../users/component/user-select.component';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
})

export class VisitPageComponent extends BaseComponent implements OnInit, PageComponent {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;

  id: number;
  fh_entrada: Date;
  fh_salida: Date;
  visitDate: Date;

  addLoading = false;
  deleteLoading = false;

  constructor(
    private route: ActivatedRoute,
    public areaSelect: AreaSelectComponent,
    public userSelect: UserSelectComponent,
  ) {
    super();
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  get formIsValid(): boolean{
    return this.areaSelect.selectedArea?.length > 0 && this.userSelect.selectedUser?.length > 0;
  }

  loadAll(): void {
    if (this.user.id_rolUsuario === Roles.USER) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'No tienes autorización para ver esta información',
      });
      setTimeout(() => {
        this.router.navigate([RouteInformation.visitsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.areaSelect.loadAreas();
        this.userSelect.loadUsers();
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
      .getByNameWithParams(`VISITAS/${this.id}`)
      .subscribe(
        (response: Visita) => {
          if (response.id_Visita) {
            this.isNew = false;
          }
          this.fh_entrada = new Date(response.fh_entrada);
          this.fh_salida = new Date(response.fh_salida);
          this.visitDate = new Date(response.fh_entrada);
          this.areaSelect.selectedArea = [response.AREA.id_Area];
          this.userSelect.selectedUser = [response.USUARIO.id_Usuario];
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

  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`VISITAS/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La visita fue eliminada con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.visitsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar la visita',
          });
          this.deleteLoading = false;
        }
      )
    );
  }

  getBreadCrumbs() {
    return [
      { label: 'Visitas', routerLink: [this.routeInformation.visitsPage] },
      { label: 'Visita', routerLink: [this.routeInformation.visitPage] }
    ];
  }
}
