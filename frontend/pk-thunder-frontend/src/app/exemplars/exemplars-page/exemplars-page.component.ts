import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';

@Component({
  selector: 'app-exemplars-page',
  templateUrl: './exemplars-page.component.html',
})
export class ExemplarsPageComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Ejemplares', routerLink: [this.routeInformation.exemplarsPage] },
    ];
  }

}
