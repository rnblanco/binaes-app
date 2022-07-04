import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Ejemplar } from '../../shared/models/exemplar';
import { HttpParams } from '@angular/common/http';

@Component({
	selector: 'root',
	template: '',
})
export class ExemplarSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public exemplarText: string ='';
	public exemplars: Ejemplar[];
	public selectedExemplar: number[] = [];
	
	public disabledDates: Date[] = [];
	public dates: Date[] = [];
	
	public exemplarFilter(event: any): void {
		this.exemplarText = event.filter;
	}
	
	public exemplarChange(event: any): void {
		this.selectedExemplar = [event.itemValue];
		this.loadDisabledDates(event.itemValue);
	}
	
	public loadDisabledDates(id: number): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('PRESTAMO', new HttpParams().set('id_Ejemplar', id))
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
	
	public loadExemplars(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('EJEMPLAR')
			.subscribe(
				(response: Ejemplar[]) => {
					this.exemplars = response;
				},
			)
		);
	}
}