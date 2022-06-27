import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasPageComponent } from './containers/areas-page/areas-page.component';

const routes: Routes = [
  {
    path: '',
    component: AreasPageComponent,
  },
  {
    path: 'area',
    component: AreasPageComponent,
  },
  {
    path: 'area/:id',
    component: AreasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
