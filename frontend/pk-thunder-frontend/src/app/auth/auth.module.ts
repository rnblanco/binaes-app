import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { UnauthorizedPageComponent } from './containers/unauthorized-page/unauthorized-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { PasswordModule } from 'primeng/password';
import { LogOutPageComponent } from './containers/log-out-page/log-out-page.component';
import { RecoverPasswordComponent } from './containers/recover-password/recover-password.component';
import { RecoverCardComponent } from './components/recover-card/recover-card.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LoginPageComponent,
    UnauthorizedPageComponent,
    LogOutPageComponent,
    RecoverPasswordComponent,
    RecoverCardComponent,
    ChangePasswordComponent,
  ],
	imports: [
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
		AuthRoutingModule,
		FormsModule,
		ButtonModule,
		InputTextModule,
		InputTextareaModule,
		ConfirmPopupModule,
		CheckboxModule,
		DividerModule,
		SelectButtonModule,
		RippleModule,
		MessagesModule,
		ProgressSpinnerModule,
		LoadingModule,
		PasswordModule
	]
})
export class AuthModule {}
