import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsPageComponent } from './containers/collections-page/collections-page.component';
import { CollectionsRoutingModule } from './collections-routing.module';

@NgModule({
  declarations: [
    CollectionsPageComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
