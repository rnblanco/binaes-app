import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsPageComponent } from './containers/reservations-page/reservations-page.component';
import { ReservationsRoutingModule } from './reservation-routing.module';
import { ReservationPageComponent } from './containers/reservation-page/reservation-page.component';
import { TableCardModule } from '../shared/components/table-card/table-card.module';
import { SharedModule } from '../shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { LoadingModule } from '../../components/loading/loading.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    ReservationsPageComponent,
    ReservationPageComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    TableCardModule,
    SharedModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    SharedModule,
    CalendarModule,
    LoadingModule,
    TooltipModule
  ]
})
export class ReservationsModule { }
