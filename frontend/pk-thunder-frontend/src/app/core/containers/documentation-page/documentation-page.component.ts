import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { MANUAL_URL } from '../../../shared/constants/utils';

@Component({
  selector: 'app-documentation-page',
  templateUrl: './documentation-page.component.html',
  styles: [`
    .general-styles {
      border-radius: 20px;
      background-size: cover;
      min-height: 200px;
      background-blend-mode: multiply;
      background-color: rgb(0, 0, 0, 0.6);
      color: white;
      font-weight: bolder;
      scale: 0.9;
      transition: all 0.6s;
    }
    .card-gestion {
      background-image: url(../../../../assets/images/computer.jpeg);
    }
    .container {
      & i {
        font-size : 1.5rem;
      }
    }
    .container:hover {
      background-color: rgb(0, 0, 0, 0.75);
      background-origin: 0;
      transform: scale(1);
      transition: 0.4s;
      font-size: 1.2rem;
      & i {
        font-size: 2rem;
        transition: 0.4s;
      }
    }
  `]
})
export class DocumentationPageComponent extends BaseComponent implements OnInit {
  
  MANUAL_URL = MANUAL_URL;
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Ayuda', routerLink: [this.routeInformation.helpPage] },
      { label: 'Manual de uso'},
    ];
  }
}
