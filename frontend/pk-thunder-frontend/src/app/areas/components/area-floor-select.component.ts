import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Area, Pisoarea } from '../../shared/models/area';
import { MultiSelect } from 'primeng/multiselect';

@Component({
	selector: 'root',
	template: '',
})
export class AreaFloorSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public floorAreaText: string ='';
	public floorAreas: Pisoarea[];
	public selectedFloorArea: number[] = [];
	
	public floorAreaFilter(event: any): void {
		this.floorAreaText = event.filter;
	}
	
	public floorAreaChange(event: any): void {
		this.selectedFloorArea = [event.itemValue];
	}
	
	public addFloorArea(floorAreaMultiSelect: MultiSelect): void {
		this.subscription.add(
			this.catalogService
			.addOfURL('PISOAREA', { pisoArea1: this.floorAreaText})
			.subscribe(
				(response: Pisoarea) => {
					this.loadFloorAreas();
					this.selectedFloorArea = [response.id_pisoArea];
					floorAreaMultiSelect.hide();
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
	
	loadFloorAreas(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('PISOAREA')
			.subscribe(
				(response: Pisoarea[]) => {
					this.floorAreas = response;
				},
			)
		);
	}
}