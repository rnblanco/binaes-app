import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RecoverPasswordComponent } from './containers/recover-password/recover-password.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { SignUpPageComponent } from './containers/sign-up-page/sign-up-page.component';
import { TermsPageComponent } from './containers/terms-page/terms-page.component';
import { UnauthorizedPageComponent } from './containers/unauthorized-page/unauthorized-page.component';
import { EmailConfirmationPageComponent } from './containers/email-confirmation-page/email-confirmation-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'login/:expiration', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'unauthorized', component: UnauthorizedPageComponent },
  { path: 'terms', component: TermsPageComponent },
  { path: 'unauthorized', component: UnauthorizedPageComponent },
  {
    path: 'forgot-password',
    component: RecoverPasswordComponent,
    data: { title: 'Forgot Password' },
  },
  {
    path: 'email/action',
    component: EmailConfirmationPageComponent,
    data: { title: 'Confirm Email Address' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
