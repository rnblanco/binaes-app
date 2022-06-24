import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsPageComponent } from './containers/collections-page/collections-page.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { TableCardModule } from '../shared/components/table-card/table-card.module';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
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
    CollectionsPageComponent,
    CollectionPageComponent
  ],
	imports: [
		CommonModule,
		CollectionsRoutingModule,
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
export class CollectionsModule { }
