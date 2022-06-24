import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplarsPageComponent } from './exemplars-page/exemplars-page.component';
import { ExemplarsRoutingModule } from './exemplars-routing.module';



@NgModule({
  declarations: [
    ExemplarsPageComponent
  ],
  imports: [
    CommonModule,
    ExemplarsRoutingModule
  ]
})
export class ExemplarsModule { }
