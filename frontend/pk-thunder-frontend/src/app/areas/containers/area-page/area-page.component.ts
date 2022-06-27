import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from '../../../auth/constants/roles';
import { Area, Coleccion, Generocoleccion, Tipocoleccion } from '../../../shared/models/collection';
import { MultiSelect } from 'primeng/multiselect';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Usuario } from '../../../shared/models/user';
import { Pisoarea, Tipoarea } from '../../../shared/models/event';

@Component({
  selector: 'app-area-page',
  templateUrl: './area-page.component.html',
  styles: [
  ]
})
export class AreaPageComponent extends BaseComponent implements OnInit {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;
  
  id: number;
  name: string;
  description: string;
  capacity: number;
  
  addLoading = false;
  deleteLoading = false;
  
  userText: string ='';
  users: Usuario[];
  selectedUser: number[] = [];
  @ViewChild('userMultiSelect') userMultiSelect: MultiSelect;
  
  areaTypeText: string ='';
  areaTypes: Tipoarea[];
  selectedAreaType: number[] = [];
  @ViewChild('areaTypeMultiSelect') areaTypeMultiSelect: MultiSelect;
  
  floorAreaText: string ='';
  floorAreas: Pisoarea[];
  selectedFloorArea: number[] = [];
  @ViewChild('floorAreaMultiSelect') floorAreaMultiSelect: MultiSelect;
  
  constructor(private route: ActivatedRoute) {
    super();
  }
  
  get formIsValid(): boolean{
    return this.name !== '' && this.description !== '' && this.capacity > 0 && this.selectedUser?.length > 0 && this.selectedAreaType?.length > 0 && this.selectedFloorArea?.length > 0;
  }
  
  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  loadAll():void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.loadAreaTypes();
        this.loadUsers();
        this.loadFloorAreas();
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
        responsable: this.selectedUser[0],
        id_pisoArea: this.selectedFloorArea[0],
        id_tipoArea: this.selectedAreaType[0]
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
        responsable: this.selectedUser[0],
        id_pisoArea: this.selectedFloorArea[0],
        id_tipoArea: this.selectedAreaType[0]
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
          this.selectedUser = [response.USUARIO.id_Usuario];
          this.selectedAreaType = [response.TIPOAREA?.id_tipoArea];
          this.selectedFloorArea = [response.PISOAREA.id_pisoArea];
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
  
  userFilter(event: any): void {
    this.userText = event.filter;
  }
  
  userChange(event: any): void {
    this.selectedUser = [event.itemValue];
  }
  
  loadUsers(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('USUARIO')
      .subscribe(
        (response: Usuario[]) => {
          this.users = response;
        },
      )
    );
  }
  
  areaTypeFilter(event: any): void {
    this.areaTypeText = event.filter;
  }
  
  areaTypeChange(event: any): void {
    this.selectedAreaType = [event.itemValue];
  }
  
  addAreaType(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('TIPOAREA', {tipoArea1: this.areaTypeText})
      .subscribe(
        (response: Tipoarea) => {
          this.loadAreaTypes();
          this.areaTypeMultiSelect.close(new Event('close'));
          this.selectedAreaType = [response.id_tipoArea];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el tipo de área',
          });
        }
      )
    );
  }
  
  loadAreaTypes(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('TIPOAREA')
      .subscribe(
        (response: Tipoarea[]) => {
          this.areaTypes = response;
        },
      )
    );
  }
  
  floorAreaFilter(event: any): void {
    this.floorAreaText = event.filter;
  }
  
  floorAreaChange(event: any): void {
    this.selectedFloorArea = [event.itemValue];
  }
  
  addFloorArea(): void {
    this.subscription.add(
      this.catalogService
      .addOfURL('PISOAREA', { pisoArea1: this.floorAreaText})
      .subscribe(
        (response: Pisoarea) => {
          this.loadAreaTypes();
          this.floorAreaMultiSelect.close(new Event('close'));
          this.selectedAreaType = [response.id_pisoArea];
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir el tipo de área',
          });
        }
      )
    );
  }
  
  loadFloorAreas(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('PISOAREA')
      .subscribe(
        (response: Pisoarea[]) => {
          this.floorAreas = response;
        },
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