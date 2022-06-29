import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitPageComponent } from './containers/visit-page/visit-page.component';
import { VisitsPageComponent } from './containers/visits-page/visits-page.component';

const routes: Routes = [
  {
    path: '',
    component: VisitsPageComponent,
  },
  {
    path: 'visit',
    component: VisitPageComponent,
  },
  {
    path: 'visit/:id',
    component: VisitPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitsRoutingModule {}
