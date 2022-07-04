import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplarsPageComponent } from './containers/exemplars-page/exemplars-page.component';
import { ExemplarsRoutingModule } from './exemplars-routing.module';
import { ExemplarPageComponent } from './containers/exemplar-page/exemplar-page.component';
import { TableCardModule } from '../shared/components/table-card/table-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { TagMaskModule } from '../shared/directives/tag-mask-model/tag-mask.module';
import { KeyFilterModule } from 'primeng/keyfilter';
import { UploadFileComponent } from '../shared/components/upload-file.component';

@NgModule({
  declarations: [
    ExemplarsPageComponent,
    ExemplarPageComponent,
  ],
	imports: [
		CommonModule,
		ExemplarsRoutingModule,
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
		TooltipModule,
		TabViewModule,
		TagMaskModule,
		ReactiveFormsModule,
		KeyFilterModule
	],
	providers: [
		UploadFileComponent,
	]
})
export class ExemplarsModule { }
