import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './auth/containers/not-found-page/not-found-page.component';
import { AppMainPageComponent } from './core/containers/app-main-page/app-main-page.component';
import { Roles } from './auth/constants/roles';
import { ProfilePageComponent } from './core/containers/profile-page/profile-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  {
    path: 'app',
    component: AppMainPageComponent,
    children: [
      /* ADMINS */
      {
        path: 'events',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./events/events.module').then((m) => m.EventsModule)
      },
      {
        path: 'collections',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule)
      },
      {
        path: 'users',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
      },
      /* USERS */
      {
        path: 'borrow',
        data: { permission: [Roles.USER] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./borrow/borrow.module').then((m) => m.BorrowModule)
      },
      {
        path: 'ask',
        data: { permission: [Roles.USER] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./events-ask/events-ask.module').then((m) => m.EventsAskModule)
      },
      /* BOTH */
      {
        path: 'profile',
        component: ProfilePageComponent,
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      },
    ]
  },
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
