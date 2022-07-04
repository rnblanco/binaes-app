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
import { ChipModule } from 'primeng/chip';
import { ExemplarStatusSelectComponent } from '../borrows/components/exemplar-status-select.component';
import { ExemplarSelectComponent } from '../borrows/components/exemplar-select.component';
import { UserSelectComponent } from '../users/component/user-select.component';

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
		TooltipModule,
		ChipModule
	],
	providers: [
		UserSelectComponent,
		ExemplarSelectComponent,
		ExemplarStatusSelectComponent
	]
})
export class ReservationsModule { }
