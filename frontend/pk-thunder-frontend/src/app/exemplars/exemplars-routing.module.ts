import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemplarsPageComponent } from './containers/exemplars-page/exemplars-page.component';
import { ExemplarPageComponent } from './containers/exemplar-page/exemplar-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExemplarsPageComponent
  },
  {
    path: 'exemplar',
    component: ExemplarPageComponent
  },
  {
    path: 'exemplar/:id',
    component: ExemplarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplarsRoutingModule {}
