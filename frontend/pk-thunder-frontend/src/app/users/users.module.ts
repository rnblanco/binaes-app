import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { UsersRoutingModule } from './users-routing.module';
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
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserPageComponent
  ],
	imports: [
		CommonModule,
		UsersRoutingModule,
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
		InputMaskModule,
		ReactiveFormsModule
	]
})
export class UsersModule { }
