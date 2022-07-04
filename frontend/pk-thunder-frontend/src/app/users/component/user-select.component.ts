import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { Usuario } from '../../shared/models/user';

@Component({
	selector: 'root',
	template: '',
})
export class UserSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	public userText: string ='';
	public users: Usuario[];
	public selectedUser: string[] = [];
	
	public userFilter(event: any): void {
		this.userText = event.filter;
	}
	
	public userChange(event: any): void {
		this.selectedUser = [event.itemValue];
	}
	
	public loadUsers(admin: boolean = false): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams(admin ? 'ADMINISTRADORES' :'USUARIO')
			.subscribe(
				(response: Usuario[]) => {
					this.users = response;
				},
			)
		);
	}
}