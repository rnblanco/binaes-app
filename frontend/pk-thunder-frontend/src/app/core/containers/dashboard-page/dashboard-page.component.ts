import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Usuario } from '../../../shared/models/user';
import { Area } from '../../../shared/models/collection';
import { MultiSelect } from 'primeng/multiselect';
import { Roles } from '../../../auth/constants/roles';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent extends BaseComponent implements OnInit {
  USER = Roles.USER;
  scannerEnabled: boolean = false;
  selectedUser: Usuario;
  
  areaText: string ='';
  areas: Area[];
  selectedArea: number[] = [];
  @ViewChild('areaMultiSelect') areaMultiSelect: MultiSelect;
  
  camerasFound: any[];
  device: any;
  devices: any[] = [];
  
  constructor() {
    super();
  }
  
  getCameras(event: any[]){
    this.camerasFound = event;
  }

  ngOnInit(): void {
    this.loadAreas();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
    console.log(new Date())
  }
  
  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }
  
  public scanSuccessHandler(event: any) {
    this.scannerEnabled = false;
    this.getUser(event);
  }
  
  areaFilter(event: any): void {
    this.areaText = event.filter;
  }
  
  areaChange(event: any): void {
    this.selectedArea = [event.itemValue];
  }
  
  loadAreas(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('AREA')
      .subscribe(
        (response: Area[]) => {
          this.areas = response;
        },
      )
    );
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
    console.log(new Date())
    this.subscription.add(
      this.catalogService
      .addOfURL(`VISITAS`, {
        id_Usuario: id,
        id_Area: this.selectedArea[0],
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
