import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { Validators } from '@angular/forms';
import { Usuario } from '../../../shared/models/user';
import { RouteInformation } from '../../../shared/constants/route-information';
import { UploadFileComponent } from '../../../shared/components/upload-file.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styles: [
  ]
})
export class ProfileInfoComponent extends BaseComponent implements OnInit {
  
  addLoading = false;
  name: string;
  email: string;
  id: string;
  telefono: string;
  ocupacion: string;
  direccion: string;
  institucion: string;
  
  constructor(
    public uploadFile: UploadFileComponent
  ) {
    super();
  }
  
  get formIsValid(): boolean {
    return this.form.valid && this.name !== '' && this.email !== '' && this.telefono !== '' && this.ocupacion !== '' && this.direccion !== '' && this.institucion !== '';
  }
  
  ngOnInit(): void {
    this.authService.loadUser();
    this.id = this.user.id_Usuario;
    this.buildForm();
    this.loadInfo();
    this.breadcrumbService.setItems(this.getBreadCrumbs());
  }
  
  buildForm():void {
    this.form = this.formBuilder.group({
      email: [
        this.email || undefined,
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
      ],
    });
  }
  
  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`USUARIO/${this.id}`)
      .subscribe(
        (response: Usuario) => {
          this.loading = true;
          this.name = response.nombre;
          this.email = response.email;
          this.telefono = response.telefono;
          this.ocupacion = response.ocupacion;
          this.direccion = response.direccion;
          this.institucion = response.institucion;
          this.uploadFile.uploadedFile.push(response.fotografia);
          this.buildForm();
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.dashboardPage]);
        }
      )
    );
  }
  
  update(){
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
      .updateOfURL(`USUARIO/${this.id}`, {
        id_Usuario: this.id,
        nombre: this.name,
        email: this.email,
        telefono: this.telefono,
        ocupacion: this.ocupacion,
        direccion: this.direccion,
        fotografia: this.uploadFile.varbinaryImage === undefined ? btoa(this.uploadFile.uploadedFile[0]) : this.uploadFile.varbinaryImage,
        institucion: this.institucion,
        id_rolUsuario: this.user.id_rolUsuario,
        contrasena: this.user.contrasena
      })
      .subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El perfil fue editado satifactoriamente',
          });
          this.authService.loadUser();
          this.addLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo editar el perfil',
          });
          this.addLoading = false;
        }
      )
    );
  }
  
  getBreadCrumbs() {
    return [
      { label: 'Perfil', routerLink: [this.routeInformation.profilePage] },
      { label: 'Información personal', routerLink: [this.routeInformation.profileInfoPage] },
    ];
  }
}
