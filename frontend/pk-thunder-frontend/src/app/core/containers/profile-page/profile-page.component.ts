import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Usuario, RolUsuario } from '../../../shared/models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent extends BaseComponent implements OnInit {
  addLoading = false;
  name: string;
  email: string;
  id: string;
  telefono: string;
  ocupacion: string;
  direccion: string;
  institucion: string;
  image: string;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.id = this.user.id_Usuario;
    this.loadInfo();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
        .getByNameWithParams(`USUARIO/${this.id}`)
        .subscribe(
          (response: Usuario) => {            
            this.name = response.nombre;
            this.email = response.email;
            this.telefono = response.telefono;
            this.ocupacion = response.ocupacion;
            this.direccion = response.direccion;
            this.institucion = response.institucion;
            this.image = response.fotografia;
            setTimeout(() => {
              this.loading = false;
            }, 200);
          },
          () => {
            this.loading = false;
            this.router.navigate([RouteInformation.profilePage]);
          }
        )
    );
  }

  getBreadCrumbs() {
    return [
      { label: 'Perfil', routerLink: [this.routeInformation.profilePage] },      
    ];
  }
}
