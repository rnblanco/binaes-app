import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplarsPageComponent } from './containers/exemplars-page/exemplars-page.component';
import { ExemplarsRoutingModule } from './exemplars-routing.module';
import { ExemplarPageComponent } from './containers/exemplar-page/exemplar-page.component';
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



@NgModule({
  declarations: [
    ExemplarsPageComponent,
    ExemplarPageComponent
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
    CalendarModule
  ]
})
export class ExemplarsModule { }
