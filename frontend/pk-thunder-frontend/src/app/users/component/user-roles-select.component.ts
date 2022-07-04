import { RolUsuario } from '../../shared/models/user';
import { Roles } from '../../auth/constants/roles';
import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
	selector: 'root',
	template: '',
})
export class UserRolesSelectComponent extends BaseComponent {
	
	public constructor() {
		super();
	}
	
	rolText: string = '';
	roles: RolUsuario[];
	selectedRol: number[] = [];
	
	rolFilter(event: any): void {
		this.rolText = event.filter;
	}
	
	rolChange(event: any): void {
		this.selectedRol = [event.itemValue];
	}
	
	loadRoles(): void {
		this.subscription.add(
			this.catalogService
			.getByNameWithParams('ROLUSUARIO')
			.subscribe(
				(response: RolUsuario[]) => {
					this.roles = response;
					
					if (this.user.id_rolUsuario == Roles.ADMIN) {
						this.roles = this.roles.filter(rol =>
							rol.id_rolUsuario != Roles.SUPER_ADMIN && rol.id_rolUsuario != Roles.ADMIN
						)
					}else if (this.user.id_rolUsuario == Roles.SUPER_ADMIN) {
						this.roles = this.roles.filter(rol =>
							rol.id_rolUsuario != Roles.SUPER_ADMIN
						)
					}
					
				},
			)
		);
	}
}