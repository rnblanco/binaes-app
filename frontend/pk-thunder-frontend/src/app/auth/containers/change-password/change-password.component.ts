import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  state: number;
  id: string;
  token: string;
  
  constructor(private route: ActivatedRoute) {
    super();
  }
  
  ngOnInit(): void {
    this.state = 3;
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params?.id_Usuario;
      this.token = params?.token;
    });
    this.validateToken();
  }
  
  validateToken(){
    this.subscription.add(
      this.catalogService.getByNameWithParams(`recoverPassword`, new HttpParams().set('idUsuario',this.id).set('token', this.token)).subscribe(
        () => {
          this.loading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: 'Error',
            body: 'El token que has ingresado no es válido, por favor inténtalo nuevamente.',
          });
          this.loading = false;
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 200);
        }
      )
    );
  }
  
  onSubmit(password: any) {
    this.loading = true;
    this.subscription.add(
      this.catalogService.updateOfURL(`ACTUALIZARCONTRASENA?idUsuario=${this.id}&token=${this.token}`, {
        id_Usuario: this.id,
        contrasena: this.encrypt(password),
      }).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: 'Éxito',
            body: 'Tu contraseña fue recuperada con éxito.',
          });
          this.loading = false;
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 200);
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: 'Error',
            body: 'No se pudo cambiar la contraseña, por favor inténtalo nuevamente.',
          });
          this.loading = false;
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 200);
        }
      )
    );
  }
}
