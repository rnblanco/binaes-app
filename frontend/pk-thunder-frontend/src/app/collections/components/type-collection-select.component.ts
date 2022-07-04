import { Generocoleccion, Tipocoleccion } from '../../shared/models/collection';
import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { MultiSelect } from 'primeng/multiselect';

@Component({
	selector: 'root',
	template: '',
})
export class TypeCollectionSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public typeText: string ='';
	public types: Tipocoleccion[];
	public selectedType: number[] = [];
	
	typeFilter(event: any): void {
		this.typeText = event.filter;
	}
	
	typeChange(event: any): void {
		this.selectedType = [event.itemValue];
	}
	
	addType(typeCollectionMultiSelect: MultiSelect): void {
		this.subscription.add(
			this.catalogService
			.addOfURL('TIPOCOLECCION', {tipoColeccion1: this.typeText})
			.subscribe(
				(response: Tipocoleccion) => {
					this.loadCollectionTypes();
					this.selectedType = [response.id_tipoColeccion];
					typeCollectionMultiSelect.hide();
				},
				() => {
					this.messageService.setPayload({
						type: 'warn',
						title: 'Error',
						body: 'No se pudo añadir el tipo',
					});
					typeCollectionMultiSelect.hide();
				}
			)
		);
	}
	
	loadCollectionTypes(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('TIPOCOLECCION')
			.subscribe(
				(response: Tipocoleccion[]) => {
					this.types = response;
				},
			)
		);
	}
}