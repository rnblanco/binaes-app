import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasPageComponent } from './containers/areas-page/areas-page.component';
import { AreaPageComponent } from './containers/area-page/area-page.component';
import { AreasRoutingModule } from './areas-routing.module';

@NgModule({
  declarations: [
    AreasPageComponent,
    AreaPageComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
  ]
})
export class AreasModule { }
