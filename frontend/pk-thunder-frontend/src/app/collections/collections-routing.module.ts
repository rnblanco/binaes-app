import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsPageComponent } from './containers/collections-page/collections-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsPageComponent,
  },
  {
    path: 'collection',
    component: CollectionPageComponent,
  },
  {
    path: 'collection/:id',
    component: CollectionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
