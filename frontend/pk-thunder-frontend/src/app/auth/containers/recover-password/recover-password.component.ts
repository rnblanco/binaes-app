import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent extends BaseComponent implements OnInit {
  state: number;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.state = 1;
  }

  onSubmit(email: string) {
    this.loading = true;
    this.subscription.add(
      this.catalogService.addOfURL(`EMAILSENDER`, { email }).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: 'Éxito',
            body: 'La recuperación de tu contraseña fue enviada a tu correo electrónico.',
          });
          this.loading = false;
          this.state = 2;
        },
        () => {
          this.messageService.setPayload({
            type: 'error',
            title: 'Error',
            body: 'El correo que has elegido no existe, por favor digita uno que corresponda a un usuario',
          });
          this.loading = false;
        }
      )
    );
  }
}
