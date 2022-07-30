import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { UnauthorizedPageComponent } from './containers/unauthorized-page/unauthorized-page.component';
import { RecoverPasswordComponent } from './containers/recover-password/recover-password.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: 'login/:expiration', component: LoginPageComponent },
  { path: 'unauthorized', component: UnauthorizedPageComponent },
  { path: 'forgot-password', component: RecoverPasswordComponent },
  { path: 'recover-password', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
