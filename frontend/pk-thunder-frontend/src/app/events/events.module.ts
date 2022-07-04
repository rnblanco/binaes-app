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
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { UploadFileComponent } from '../shared/components/upload-file.component';
import { AreaSelectComponent } from '../areas/components/area-select.component';
import { ObjectivesComponent } from './components/objectives/objectives.component';

@NgModule({
	declarations: [
		EventsPageComponent,
		EventPageComponent,
		ObjectivesComponent
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
		LoadingModule,
		CalendarModule,
		FileUploadModule,
		HttpClientModule,
		InputNumberModule,
		InputTextareaModule,
		TabViewModule,
		TooltipModule
	],
	providers: [
		UploadFileComponent,
		AreaSelectComponent,
	]
})
export class EventsModule { }
