import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from 'src/app/auth/constants/roles';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent extends BaseComponent implements OnInit {
  public model: any[] | undefined;
  
  constructor(public appMain: AppMainComponent) {
    super();
  }
  
  override ngOnInit() {
      switch(this.user.rol){
        case Roles.SUPER_ADMIN || Roles.ADMIN:
          this.model = [
            {
              label: 'Inicio',
              icon: 'pi pi-fw pi-home',
              routerLink: [this.routeInformation.homePage]
            },
            {
              label: 'Eventos',
              icon: 'pi pi-fw pi-check-square',
              routerLink: [this.routeInformation.eventsPage]
            },
            {
              label: 'Colecciones y ejemplares',
              icon: 'pi pi-fw pi-book',
              routerLink: [this.routeInformation.collectionsPage]
            },
            {
              label: `Usuarios ${this.user.rol === Roles.SUPER_ADMIN ? 'y Administradores' : ''}`,
              icon: 'pi pi-fw pi-book',
              routerLink: [this.routeInformation.usersPage]
            },
          ];
        break;
        case Roles.USER:
          this.model = [
            {
              label: 'Inicio',
              icon: 'pi pi-fw pi-home',
              routerLink: [this.routeInformation.homePage]
            },
            {
              label: 'Colecciones y ejemplares',
              icon: 'pi pi-fw pi-book',
              routerLink: [this.routeInformation.borrowPage]
            },
            {
              label: 'Solicitud de eventos',
              icon: 'pi pi-fw pi-check-square',
              routerLink: [this.routeInformation.askEventPage]
            },
          ];
        break;
      }
    
  }
  
  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement> event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}
