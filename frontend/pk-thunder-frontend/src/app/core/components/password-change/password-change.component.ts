import { Component, OnInit } from '@angular/core';
import { RouteInformation } from '../../../shared/constants/route-information';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
})
export class PasswordChangeComponent extends BaseComponent implements OnInit {
  
  addLoading = false;
  id: string;
  contrasenaA: string;
  contrasenaN: string;
  contrasenaC: string;
  
  constructor() {
    super();
  }
  
  get formIsValid(): boolean {
    return this.contrasenaA !== '' && this.contrasenaA !== undefined && this.contrasenaN !== '' && this.contrasenaN !== undefined && this.contrasenaC !== ''&& this.contrasenaC !== undefined;
  }
  
  ngOnInit(): void {
    this.id = this.user.id_Usuario;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
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
              title: '¡Éxito!',
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
      { label: 'Cambio de contraseña', routerLink: [this.routeInformation.profilePasswordPage] },
    ];
  }

}
