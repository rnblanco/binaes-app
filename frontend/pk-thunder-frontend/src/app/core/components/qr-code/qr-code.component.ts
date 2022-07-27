import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styles: [
  ]
})
export class QrCodeComponent extends BaseComponent implements OnInit {
  
  addLoading = false;
  id: string;
  image: string;
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    this.id = this.user.id_Usuario;
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Perfil', routerLink: [this.routeInformation.profilePage] },
      { label: 'Código QR', routerLink: [this.routeInformation.profileQrPage] },
    ];
  }
}
