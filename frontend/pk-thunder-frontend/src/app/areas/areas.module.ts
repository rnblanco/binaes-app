import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasPageComponent } from './containers/areas-page/areas-page.component';
import { AreaPageComponent } from './containers/area-page/area-page.component';
import { AreasRoutingModule } from './areas-routing.module';
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
import { ChipModule } from 'primeng/chip';
import { AreaSelectComponent } from './components/area-select.component';
import { UserSelectComponent } from '../users/component/user-select.component';
import { AreaTypeSelectComponent } from './components/area-type-select.component';
import { AreaFloorSelectComponent } from './components/area-floor-select.component';

@NgModule({
  declarations: [
    AreasPageComponent,
    AreaPageComponent,
	  AreaSelectComponent,
	  AreaTypeSelectComponent,
	  AreaFloorSelectComponent
  ],
	imports: [
		CommonModule,
		AreasRoutingModule,
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
		ChipModule
	],
	providers:[
		UserSelectComponent,
		AreaTypeSelectComponent,
		AreaFloorSelectComponent
	]
})
export class AreasModule { }
