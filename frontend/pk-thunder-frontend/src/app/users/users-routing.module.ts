import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserPageComponent } from './containers/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'user/:id',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
