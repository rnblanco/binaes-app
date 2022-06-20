import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TemplateService } from './template.service';

const URL = `${environment.api_url}`;

@Injectable({
	providedIn: 'root'
})
export class CatalogService extends TemplateService {
	
	constructor(protected override readonly http: HttpClient) {
		super(http);
	}
	
	getByNameWithParams(url: string, _params?: any) {
		const _url = `${URL}/${url}`;
		const httpOptions = { params: _params }
		return this.getOfURL(_url, httpOptions);
	}
	
	getOneByName(url: string) {
		const _url = `${URL}/${url}`;
		return this.getWhitoutId(_url);
	}
	
	getAllByName(url: string) {
		const _url = `${URL}/${url}`;
		return this.getAll(_url);
	}
	
	override addOfURL(url: string, options?: any) {
		const _url = `${URL}/${url}`;
		return super.addOfURL(_url, options);
	}
	
	override updateOfURL(url: string, options?: any) {
		const _url = `${URL}/${url}`;
		return super.updateOfURL(_url, options);
	}
	
	override deleteOfURL(url: string, options?: any) {
		const _url = `${URL}/${url}`;
		return super.deleteOfURL(_url, options);
	}
}
