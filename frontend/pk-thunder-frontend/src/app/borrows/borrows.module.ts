import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowsRoutingModule } from './borrows-routing.module';
import { BorrowPageComponent } from './containers/borrow-page/borrow-page.component';
import { BorrowsPageComponent } from './containers/borrows-page/borrows-page.component';
import { TableCardModule } from '../shared/components/table-card/table-card.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { LoadingModule } from '../../components/loading/loading.module';
import { ChipModule } from 'primeng/chip';
import { ExemplarSelectComponent } from './components/exemplar-select.component';
import { ExemplarStatusSelectComponent } from './components/exemplar-status-select.component';
import { UserSelectComponent } from '../users/component/user-select.component';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    BorrowPageComponent,
    BorrowsPageComponent,
	  ExemplarSelectComponent,
	  ExemplarStatusSelectComponent
  ],
	imports: [
		CommonModule,
		BorrowsRoutingModule,
		TableCardModule,
		SharedModule,
		MultiSelectModule,
		FormsModule,
		ButtonModule,
		RippleModule,
		SharedModule,
		CalendarModule,
		LoadingModule,
		ChipModule,
		TooltipModule,
		MessagesModule
	],
	providers: [
		UserSelectComponent,
		ExemplarSelectComponent,
		ExemplarStatusSelectComponent,
	]
})
export class BorrowsModule { }
