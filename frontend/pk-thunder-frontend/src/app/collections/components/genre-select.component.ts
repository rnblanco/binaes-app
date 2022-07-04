import { Generocoleccion } from '../../shared/models/collection';
import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { MultiSelect } from 'primeng/multiselect';

@Component({
	selector: 'root',
	template: '',
})
export class GenreSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public genreText: string ='';
	public genres: Generocoleccion[];
	public selectedGenre: number[] = [];
	
	public genreFilter(event: any): void {
		this.genreText = event.filter;
	}
	
	public genreChange(event: any): void {
		this.selectedGenre = [event.itemValue];
	}
	
	public addGenre(genreMultiSelect: MultiSelect): void {
		this.subscription.add(
			this.catalogService
			.addOfURL('GENEROCOLECCION', { generoColeccion1: this.genreText})
			.subscribe(
				(response: Generocoleccion) => {
					this.loadGenres();
					this.selectedGenre = [response.id_generoColeccion];
					genreMultiSelect.hide();
				},
				() => {
					this.messageService.setPayload({
						type: 'warn',
						title: 'Error',
						body: 'No se pudo añadir el género',
					});
					genreMultiSelect.hide();
				}
			)
		);
	}
	
	public loadGenres(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('GENEROCOLECCION')
			.subscribe(
				(response: Generocoleccion[]) => {
					this.genres = response;
				},
			)
		);
	}
}