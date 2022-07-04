import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Estados } from '../../shared/models/exemplar';

@Component({
	selector: 'root',
	template: '',
})
export class ExemplarStatusSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public status: Estados[] = [];
	public selectedStatus: number[] = [];
	public loadedStatus: number;
	
	public loadStatus(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('ESTADOS')
			.subscribe(
				(response: Estados[]) => {
					this.status = response;
				},
			)
		);
	}
	
}