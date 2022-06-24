import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemplarsPageComponent } from './containers/exemplars-page/exemplars-page.component';

const routes: Routes = [
  { path: '', component: ExemplarsPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplarsRoutingModule {}
