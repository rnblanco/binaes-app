import { Component, OnInit } from '@angular/core';
import { LazyComponent } from '../../../shared/components/lazy-component.component';
import { Roles } from '../../../auth/constants/roles';


@Component({
  selector: 'app-visits-page',
  templateUrl: './visits-page.component.html',
  styles: [
  ]
})
export class VisitsPageComponent extends LazyComponent implements OnInit {

  USER = Roles.USER;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }

  getBreadCrumbs() {
    return [
      { label: 'Visitas', routerLink: [this.routeInformation.visitPage] },
    ];
  }
}
