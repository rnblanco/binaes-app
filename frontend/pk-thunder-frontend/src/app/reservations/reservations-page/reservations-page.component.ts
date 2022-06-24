import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
})
export class ReservationsPageComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Reservas', routerLink: [this.routeInformation.reservationsPage] },
    ];
  }

}
