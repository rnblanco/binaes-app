import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';
import { Area } from 'src/app/shared/models/event';
import { Usuario } from 'src/app/shared/models/user';
import { Visita } from 'src/app/shared/models/visit';
@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
})

export class VisitPageComponent extends BaseComponent implements OnInit {
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  isNew: boolean = true;

  id: number;
  fh_entrada: Date;
  fh_salida: Date;
  visitDate: Date;

  addLoading = false;
  deleteLoading = false;

  areaText: string ='';
  areas: Area[];
  selectedArea: number[] = [];
  @ViewChild('areaMultiSelect') areaMultiSelect: MultiSelect;

  userText: string ='';
  users: Usuario[];
  selectedUser: number[] = [];
  @ViewChild('areaMultiSelect') userMultiSelect: MultiSelect;

  constructor(private route: ActivatedRoute) {
    super();
  }

  get formIsValid(): boolean{
    return this.selectedArea?.length > 0 && this.selectedUser?.length > 0;
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
        this.router.navigate([RouteInformation.visitsPage])
      }, 50);
    }
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {
        this.loading = true;
        this.loadAreas();
        this.loadUsers();
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

  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .addOfURL(`VISITAS`, {
        id_Visita: this.id,
        fh_entrada: this.fh_entrada,
        fh_salida: this.fh_salida,
        id_Usuario: this.selectedUser[0],
        id_Area: this.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La visita fue añadida satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.visitsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo añadir la visita',
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
      .updateOfURL(`VISITAS/${this.id}`, {
        id_Visita: this.id,
        fh_entrada: this.fh_entrada,
        fh_salida: this.fh_salida,
        id_Usuario: this.selectedUser[0],
        id_Area: this.selectedArea[0],
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'La visita fue editada satifactoriamente',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.visitsPage])
          }, 200);
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar la visita',
          });
          this.addLoading = false;
        }
      )
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
          this.selectedArea = [response.AREA.id_Area];
          this.selectedUser = [response.USUARIO.id_Usuario];
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
      { label: 'Visitas', routerLink: [this.routeInformation.visitsPage] },
      { label: 'Visita', routerLink: [this.routeInformation.visitPage] }
    ];
  }
}
