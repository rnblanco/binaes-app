import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { BaseComponent } from '../../../shared/components/base.component';
import { Roles } from 'src/app/auth/constants/roles';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent extends BaseComponent implements OnInit {
  public model: any[] = [];
  
  constructor(public appMain: AppMainComponent) {
    super();
  }
  
  ngOnInit() {
    this.user = this.authService.storagedUser;
    
    switch(this.user?.ROLUSUARIO.id_rolUsuario){
      case Roles.SUPER_ADMIN:
        this.buildAdminMenu();
        break;
        case Roles.ADMIN:
        this.buildAdminMenu();
        break;
      case Roles.USER:
        this.buildUserMenu();
    }
  }
  
  buildAdminMenu(): void {
    this.model = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: this.routeInformation.homePage
      },
      {
        label: 'Colecciones',
        icon: 'pi pi-fw pi-folder',
        routerLink: this.routeInformation.collectionsPage
      },
      {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-book',
        routerLink: this.routeInformation.exemplarsPage
      },
      {
        label: 'Préstamos',
        icon: 'pi pi-fw pi-check-square',
        routerLink: this.routeInformation.borrowsPage
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: this.routeInformation.reservationsPage
      },
      {
        label: 'Áreas',
        icon: 'pi pi-fw pi-th-large',
        routerLink: this.routeInformation.areasPage
      },
      {
        label: 'Visitas',
        icon: 'pi pi-fw pi-id-card',
        routerLink: this.routeInformation.visitsPage
      },
      {
        label: 'Eventos',
        icon: 'pi pi-fw pi-ticket',
        routerLink: this.routeInformation.eventsPage
      },
      {
        label: `Usuarios ${this.user?.ROLUSUARIO.id_rolUsuario === Roles.SUPER_ADMIN ? 'y Administradores' : ''}`,
        icon: 'pi pi-fw pi-users',
        routerLink: this.routeInformation.usersPage
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: this.routeInformation.helpPage
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: this.routeInformation.logOutPage
      }
    ];
  }
  
    buildUserMenu(): void {
    this.model = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: this.routeInformation.dashboardPage
      },
      {
        label: 'Colecciones',
        icon: 'pi pi-fw pi-folder',
        routerLink: this.routeInformation.collectionsPage
      },
      {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-book',
        routerLink: this.routeInformation.exemplarsPage
      },
      {
        label: 'Préstamos',
        icon: 'pi pi-fw pi-check-square',
        routerLink: this.routeInformation.borrowsPage
      },
      {
        label: 'Reservas',
        icon: 'pi pi-fw pi-calendar',
        routerLink: this.routeInformation.reservationsPage
      },
      {
        label: 'Eventos',
        icon: 'pi pi-fw pi-ticket',
        routerLink: this.routeInformation.eventsPage
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: this.routeInformation.helpPage
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: this.routeInformation.logOutPage
      }
    ];
  }
  
  onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement> event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }
}