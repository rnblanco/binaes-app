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

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LoginPageComponent,
    UnauthorizedPageComponent,
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
