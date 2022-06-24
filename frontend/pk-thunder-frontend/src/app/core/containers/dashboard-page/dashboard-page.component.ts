import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Página principal', routerLink: [this.routeInformation.homePage] },
    ];
  }

}
