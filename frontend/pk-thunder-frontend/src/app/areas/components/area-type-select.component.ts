import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Tipoarea } from '../../shared/models/area';
import { MultiSelect } from 'primeng/multiselect';

@Component({
	selector: 'root',
	template: '',
})
export class AreaTypeSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public areaTypeText: string ='';
	public areaTypes: Tipoarea[];
	public selectedAreaType: number[] = [];
	
	public areaTypeFilter(event: any): void {
		this.areaTypeText = event.filter;
	}
	
	public areaTypeChange(event: any): void {
		this.selectedAreaType = [event.itemValue];
	}
	
	public addAreaType(areaTypeMultiSelect: MultiSelect): void {
		this.subscription.add(
			this.catalogService
			.addOfURL('TIPOAREA', {tipoArea1: this.areaTypeText})
			.subscribe(
				(response: Tipoarea) => {
					this.loadAreaTypes();
					this.selectedAreaType = [response.id_tipoArea];
					areaTypeMultiSelect.hide();
				},
				() => {
					this.messageService.setPayload({
						type: 'warn',
						title: 'Error',
						body: 'No se pudo añadir el tipo de área',
					});
				}
			)
		);
	}
	
	public loadAreaTypes(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('TIPOAREA')
			.subscribe(
				(response: Tipoarea[]) => {
					this.areaTypes = response;
				},
			)
		);
	}
}