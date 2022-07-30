import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-card',
  templateUrl: './recover-card.component.html',
  styleUrls: ['./recover-card.component.scss']
})
export class RecoverCardComponent extends BaseComponent implements OnInit {
  @Output() actionPassword: EventEmitter<string> = new EventEmitter<string>();
  @Output() actionEmail: EventEmitter<string> = new EventEmitter<string>();
  @Input() routeInformation: any;
  @Input() state: number;
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.loading = true;
    // When password is needed
    if (this.state === 3) {
      this.form = this.formBuilder.group(
        {
          password: ['', [Validators.required]],
          newPassword: ['', [Validators.required]],
        },
        {
          validators: this.validatorService.mustMatch(
            'password',
            'newPassword'
          ),
        }
      );
    } else {
      // When email is needed
      this.form = this.formBuilder.group({
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(this.validatorService.emailPattern),
          ],
        ],
      });
    }
    this.loading = false;
  }
  
  sendEmail(): void {
    if (this.form.invalid) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'Complete el formulario',
      });
    } else {
      this.actionEmail.emit(this.form.controls.email.value);
      this.form.reset();
    }
  }
  
  sendPassword(): void {
    if (this.form.invalid) {
      this.messageService.setPayload({
        type: 'warn',
        title: 'Error',
        body: 'Complete el formulario',
      });
    }
    else {
      this.actionPassword.emit(this.form.controls.password.value);
      this.form.reset();
    }
  }
}