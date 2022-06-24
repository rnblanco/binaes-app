import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
})
export class EventsPageComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Eventos', routerLink: [this.routeInformation.eventsPage] },
    ];
  }

}
