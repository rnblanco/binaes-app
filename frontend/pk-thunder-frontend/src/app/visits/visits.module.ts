import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitPageComponent } from './containers/visit-page/visit-page.component';
import { VisitsPageComponent } from './containers/visits-page/visits-page.component';
import { VisitsRoutingModule } from './visits-routing.module';
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
import { UserSelectComponent } from '../users/component/user-select.component';
import { AreaSelectComponent } from '../areas/components/area-select.component';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    VisitPageComponent,
    VisitsPageComponent
  ],
  imports: [
    CommonModule,
    VisitsRoutingModule,
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
  providers: [
    UserSelectComponent,
    AreaSelectComponent
  ]
})
export class VisitsModule { }
