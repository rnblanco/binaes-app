import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Area } from '../../../shared/models/area';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';
import { AreaTypeSelectComponent } from '../../components/area-type-select.component';
import { AreaFloorSelectComponent } from '../../components/area-floor-select.component';
import { UserSelectComponent } from '../../../users/component/user-select.component';

@Component({
  selector: 'app-area-page',
  templateUrl: './area-page.component.html',
})
export class AreaPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  name: string;
  description: string;
  capacity: number;
  
  addLoading = false;
  deleteLoading = false;
  
  constructor(
    private route: ActivatedRoute,
    public userSelect: UserSelectComponent,
    public areaTypeSelectComponent: AreaTypeSelectComponent,
    public areaFloorSelectComponent: AreaFloorSelectComponent
  ) {
    super();
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  get formIsValid(): boolean{
    return this.name !== '' && this.description !== '' && this.capacity > 0 && this.userSelect.selectedUser?.length > 0 && this.areaTypeSelectComponent.selectedAreaType?.length > 0 && this.areaFloorSelectComponent.selectedFloorArea?.length > 0;
  }
  
  loadAll():void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.areaTypeSelectComponent.loadAreaTypes();
        this.userSelect.loadUsers(true);
        this.areaFloorSelectComponent.loadFloorAreas();
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
      .getByNameWithParams(`AREA/${this.id}`)
      .subscribe(
        (response: Area) => {
          if (response.nombre) {
            this.isNew = false;
          }
          this.id = response.id_Area;
          this.name = response.nombre;
          this.description = response.descripcion;
          this.capacity = response.capacidad;
          this.userSelect.selectedUser = [response.USUARIO.id_Usuario];
          this.areaTypeSelectComponent.selectedAreaType = [response.TIPOAREA?.id_tipoArea];
          this.areaFloorSelectComponent.selectedFloorArea = [response.PISOAREA.id_pisoArea];
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.areasPage]);
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
      .addOfURL(`AREA`, {
        nombre: this.name,
        descripcion: this.description,
        capacidad: this.capacity,
        responsable: this.userSelect.selectedUser[0],
        id_pisoArea: this.areaFloorSelectComponent.selectedFloorArea[0],
        id_tipoArea: this.areaTypeSelectComponent.selectedAreaType[0]
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El área fue añadida satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.areasPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el área',
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
      .updateOfURL(`AREA/${this.id}`, {
	      id_Area: this.id,
        nombre: this.name,
        descripcion: this.description,
        capacidad: this.capacity,
        responsable: this.userSelect.selectedUser[0],
        id_pisoArea: this.areaFloorSelectComponent.selectedFloorArea[0],
        id_tipoArea: this.areaTypeSelectComponent.selectedAreaType[0]
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El área fue editada satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.areasPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar el área',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`AREA/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El área fue eliminada con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.areasPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el área',
          });
          this.deleteLoading = false;
        }
      )
    );
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Áreas', routerLink: [this.routeInformation.areasPage] },
      { label: 'Área', routerLink: [this.routeInformation.areaPage] }
    ];
  }
}