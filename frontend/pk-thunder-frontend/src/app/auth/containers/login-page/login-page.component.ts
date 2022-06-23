import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { Validators } from '@angular/forms';
import { StorageInformation } from '../../../shared/constants/storage-information';
import { User } from 'src/app/shared/models/user';
import { RouteInformation } from '../../../shared/constants/route-information';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent extends BaseComponent implements OnInit, AfterViewInit {
  
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
  
  async encode(message: string) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  }
  
  async onSubmit(): Promise<void> {
    const contrasena = await this.encode(this.form.value.contrasena);
    this.subscription.add(
      this.catalogService.addOfURL('INICIAR_SESION',
        { email: this.form.value.email, contrasena }).subscribe(
        {
          next: (user: User) =>{
            this.storageService.store(StorageInformation.user, user);
            this.router.navigate([RouteInformation.eventsPage]);
          },
          error: (error) => {
            console.log(error)
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: error.Message,
            });
          }
        }
      )
    )
  }
}
