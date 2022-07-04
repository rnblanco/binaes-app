import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Usuario } from '../../../shared/models/user';
import { Roles } from '../../../auth/constants/roles';
import { AreaSelectComponent } from '../../../areas/components/area-select.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent extends BaseComponent implements OnInit {
  USER = Roles.USER;
  scannerEnabled: boolean = false;
  selectedUser: Usuario;
  
  camerasFound: any[];
  device: any;
  devices: any[] = [];
  
  constructor(public areaSelect: AreaSelectComponent) {
    super();
  }
  
  getCameras(event: any[]){
    this.camerasFound = event;
  }

  ngOnInit(): void {
    this.areaSelect.loadAreas();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }
  
  public scanSuccessHandler(event: any) {
    this.scannerEnabled = false;
    this.getUser(event);
  }
  
  getUser(id: string){
    this.loading = true;
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`USUARIO/${id}`)
      .subscribe(
        (response: Usuario) => {
          this.selectedUser = response;
          this.loading = false;
          this.updateVisit(id);
          },
        () => {
          this.loading = false;
        }
      )
    );
  }
  
  updateVisit(id: string) {
    this.subscription.add(
      this.catalogService
      .addOfURL(`VISITAS`, {
        id_Usuario: id,
        id_Area: this.areaSelect.selectedArea[0],
        fh_entrada: new Date(),
        fh_salida: null
      })
      .subscribe(
        (response: Usuario) => {
          this.messageService.setPayload({
            type: 'success',
            title: 'Éxito',
            body: `${response ? 'Entrada' : 'Salida'} registrada con éxito`,
          });
        },
        () => {
          this.loading = false;
        }
      )
    );
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Página principal', routerLink: [this.routeInformation.homePage] },
    ];
  }
  

}
