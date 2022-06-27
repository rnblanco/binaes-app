import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationPageComponent } from './containers/reservation-page/reservation-page.component';
import { ReservationsPageComponent } from './containers/reservations-page/reservations-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsPageComponent,
  },
  {
    path: 'reservation',
    component: ReservationPageComponent,
  },
  {
    path: 'reservation/:id',
    component: ReservationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
