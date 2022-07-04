import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Area } from '../../shared/models/area';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'root',
	template: '',
})
export class AreaSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public areaText: string ='';
	public areas: Area[];
	public selectedArea: number[] = [];
	public capacity: number;
	
	dates: Date[] = [];
	disabledDates: Date[] = [];
	
	public areaFilter(event: any): void {
		this.areaText = event.filter;
	}
	
	areaChange(event: any): void {
		this.selectedArea = [event.itemValue];
		this.loadDisabledDates(event.itemValue);
		const area = this.areas.find((area) => area.id_Area === this.selectedArea[0]);
		this.capacity = area?.capacidad ?? 0;
	}
	
	public loadAreas(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('AREA')
			.subscribe(
				(response: Area[]) => {
					this.areas = response;
				},
			)
		);
	}
	
	public loadDisabledDates(id: number): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('EVENTO', new HttpParams().set('id_areaRealizacion', id))
			.subscribe(
				(response: Date[]) => {
					if(response){
						this.disabledDates = response.map((date)=> new Date(date));
					}
					this.dates = [];
				},
			)
		);
	}
}