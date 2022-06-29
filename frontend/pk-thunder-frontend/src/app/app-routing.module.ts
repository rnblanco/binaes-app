import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './auth/containers/not-found-page/not-found-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ProfilePageComponent } from './core/containers/profile-page/profile-page.component';
import { Roles } from './auth/constants/roles';
import { PrevAuthGuard } from './auth/guards/prev-auth.guard';
import { AppMainComponent } from './core/containers/app-main-page/app.main.component';
import { LogOutPageComponent } from './auth/log-out-page/log-out-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', canActivate: [PrevAuthGuard], loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  {
    path: 'app',
    component: AppMainComponent,
    children: [
      /* ADMINS AND USERS */
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: '',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./core/core.module').then((m) => m.CoreModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'events',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./events/events.module').then((m) => m.EventsModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'collections',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./collections/collections.module').then((m) => m.CollectionsModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'exemplars',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./exemplars/exemplars.module').then((m) => m.ExemplarsModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'reservations',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./reservations/reservations.module').then((m) => m.ReservationsModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'profile',
        component: ProfilePageComponent,
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'borrows',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER] },
        loadChildren: () => import('./borrows/borrows.module').then((m) => m.BorrowsModule)
      },
	    {
		    canActivate: [AuthGuard],
		    canActivateChild: [AuthGuard],
		    path: 'areas',
		    data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
		    loadChildren: () => import('./areas/areas.module').then((m) => m.AreasModule)
	    },
      /* ONLY ADMINS */
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'users',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule)
      },
      {
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        path: 'visits',
        data: { permission: [Roles.SUPER_ADMIN, Roles.ADMIN] },
        loadChildren: () => import('./visits/visits.module').then((m) => m.VisitsModule)
      },
    ]
  },
  { path: 'log-out', component: LogOutPageComponent},
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
