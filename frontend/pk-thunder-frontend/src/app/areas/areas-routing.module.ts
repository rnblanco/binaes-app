import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPageComponent } from './containers/area-page/area-page.component';
import { AreasPageComponent } from './containers/areas-page/areas-page.component';

const routes: Routes = [
  {
    path: '',
    component: AreasPageComponent,
  },
  {
    path: 'area',
    component: AreaPageComponent,
  },
  {
    path: 'area/:id',
    component: AreaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
