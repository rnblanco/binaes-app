import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { Validators } from '@angular/forms';
import { StorageInformation } from '../../../shared/constants/storage-information';
import { LoginReturnModel } from 'src/app/shared/models/user';
import { RouteInformation } from '../../../shared/constants/route-information';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent extends BaseComponent implements OnInit, AfterViewInit {
  loadingButton:boolean = false;
  constructor(private elementRef: ElementRef) {
    super();
  }
  
  ngAfterViewInit():void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#545094';
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
      ],
      password: ['', Validators.required],
    });
  }
  
  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.buttonLoading = true;
    const { password } = this.form.value;
    this.subscription.add(
      this.catalogService.addOfURL('INICIAR_SESION',
        { email: this.form.value.email, contrasena: this.encrypt(password) }).subscribe({
          next: (loginReturnModel: LoginReturnModel) => {
            this.buttonLoading = false;
            this.storageService.store(StorageInformation.user, loginReturnModel.usuario);
            this.storageService.store(StorageInformation.token, loginReturnModel.token);
            this.router.navigate([RouteInformation.dashboardPage]);
            this.buttonLoading = false;
          },
          error: (error) => {
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: error?.Message || 'Credenciales incorrectas',
            });
            this.buttonLoading = false;
          }
      })
    )
  }
}
