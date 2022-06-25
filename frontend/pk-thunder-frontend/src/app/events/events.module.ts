import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './containers/events-page/events-page.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventPageComponent } from './containers/event-page/event-page.component';
import { TableCardModule } from '../shared/components/table-card/table-card.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from '../shared/shared.module';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
  declarations: [
    EventsPageComponent,
    EventPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    TableCardModule,
		FormsModule,
		InputTextModule,
		ListboxModule,
		ButtonModule,
		RippleModule,
		MultiSelectModule,
		SharedModule,
		LoadingModule
  ]
})
export class EventsModule { }
