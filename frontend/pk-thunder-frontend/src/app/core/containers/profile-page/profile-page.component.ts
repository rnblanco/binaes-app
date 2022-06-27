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
  // id: string;
  id: number;
  telefono: string;
  ocupacion: string;
  direccion: string;
  institucion: string;
  image: string;
  contrasenaA: string;
  contrasenaN: string;
  contrasenaC: string;

  constructor(private route: ActivatedRoute) {
    super();
  }

  get formIsValid(): boolean {    
    return this.contrasenaA !== '' && this.contrasenaA !== undefined && this.contrasenaN !== '' && this.contrasenaN !== undefined && this.contrasenaC !== ''&& this.contrasenaC !== undefined;
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
            this.loading = true;
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

  updatePassword() {
    this.addLoading = true;
    if (this.contrasenaN !== this.contrasenaC) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'Verifique que la nueva contraseña sea igual a su confirmación',
      });
    } else {
      this.subscription.add(
        this.catalogService
        .updateOfURL(`ACTUALIZARCONTRASENA/${this.id}`, {
          id_Usuario: this.id,
          contrasenaA: this.encrypt(this.contrasenaA),
          contrasenaN: this.encrypt(this.contrasenaN),
          contrasenaC: this.encrypt(this.contrasenaC)
        })
        .subscribe(
          () => {
            this.messageService.setPayload({
              type: 'success',
              title: '¡Exito!',
              body: 'Contraseña actualizada correctamente',
            });
            setTimeout(() => {
              this.router.navigate([RouteInformation.dashboardPage])
            }, 200);
            this.addLoading = false;
          },
          () => {
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: 'Contraseña actual incorrecta',
            });
            this.addLoading = false;
          }
        )
      );
    }
  }

  getBreadCrumbs() {
    return [
      { label: 'Perfil', routerLink: [this.routeInformation.profilePage] },      
    ];
  }
}
