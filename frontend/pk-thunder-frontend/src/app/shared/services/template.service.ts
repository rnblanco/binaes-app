import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class TemplateService {
	
	constructor(
		protected readonly http: HttpClient
	) {}
	
	getOfURL(url: string, options?: any): Observable<any> {
		return this.http.get(`${url}`, options).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	getAll(url: string): Observable<any[]> {
		return this.http.get<any[]>(url).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	get(url: string, id: number): Observable<any> {
		return this.http.get<any>(`${url}/${id}`).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	getWhitoutId(url: string): Observable<any> {
		return this.http.get<any>(`${url}`).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	protected addOfURL(url: string, model: any): Observable<any> {
		return this.http.post<any>(`${url}`, model).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	protected updateOfURL(url: string, model: any): Observable<any> {
		return this.http.put(`${url}`, model).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	protected deleteOfURL(url: string, model: any): Observable<any> {
		return this.http.delete<any>(`${url}`).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	// File Service
	
	getFileOfURL(url: string, options?: any): Observable<any> {
		if (options) {
			options.responseType = 'blob' as 'json';
			options.observe = 'response' as 'body';
		} else {
			options = {
				responseType : 'blob' as 'json',
				observe: 'response' as 'body'};
		}
		return this.http.get(url, options)
		.pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
	getUsingPost(url: string, options: any): Observable<any> {
		return this.http.post(`${url}/`, options).pipe(
			catchError(err => {
				return throwError(err);
			})
		);
	}
	
}
