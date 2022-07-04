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
import { GenreSelectComponent } from './components/genre-select.component';
import { TypeCollectionSelectComponent } from './components/type-collection-select.component';
import { AreaSelectComponent } from '../areas/components/area-select.component';

@NgModule({
  declarations: [
    CollectionsPageComponent,
    CollectionPageComponent,
	  GenreSelectComponent,
	  TypeCollectionSelectComponent,
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
	],
	providers: [
		TypeCollectionSelectComponent,
		GenreSelectComponent,
		AreaSelectComponent,
	]
})
export class CollectionsModule { }
