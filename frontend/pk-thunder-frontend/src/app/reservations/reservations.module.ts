import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsPageComponent } from './reservations-page/reservations-page.component';
import { ReservationsRoutingModule } from './reservation-routing.module';



@NgModule({
  declarations: [
    ReservationsPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
