import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-borrows-page',
  templateUrl: './borrows-page.component.html',
})
export class BorrowsPageComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Préstamos', routerLink: [this.routeInformation.borrowsPage] },
    ];
  }

}
