import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { RouteInformation } from '../../../shared/constants/route-information';
import { RolUsuario, Usuario } from '../../../shared/models/user';
import { Roles } from '../../../auth/constants/roles';
import { FileUpload } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent extends BaseComponent implements OnInit {

  isNew: boolean = true;
  id: string;
  name: string;
  email: string;
  telefono: string;
  ocupacion: string;
  direccion: string;
  institucion: string;
  contrasena: string;

  varbinaryImage: string;
  uploadedFiles: File[];
  uploadedFile: any[] = [];
  selectedfiles: any[] = [];
  SUPER_ADMIN = Roles.SUPER_ADMIN;
  addLoading = false;
  deleteLoading = false;

  @ViewChild(FileUpload) fileUpload: FileUpload

  rolText: string = '';
  roles: RolUsuario[];
  selectedRol: number[] = [];
  @ViewChild('rolMultiSelect') rolMultiSelect: MultiSelect;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    super();
  }

  get formIsValid(): boolean {
    return this.name !== '' && this.email !== '' && this.telefono !== '' && this.ocupacion !== '' && this.institucion !== '' && this.direccion !== '' && this.selectedRol?.length > 0 && (this.uploadedFiles != undefined || this.uploadedFile.length > 0);    
  }

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
    this.breadcrumbService.setItems(this.getBreadCrumbs());    
  }

  loadAll(): void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {        
        this.loading = true;
        this.loadRoles();
        if (id) {
          this.id = id;
          this.loadInfo();
        } else {
          this.loading = false;
        }        
      })
    );
  }

  delete(): void {
    this.deleteLoading = true;
    this.subscription.add(
      this.catalogService.deleteOfURL(`USUARIO/${this.id}`).subscribe(
        () => {
          this.messageService.setPayload({
            type: 'success',
            title: '¡Exito!',
            body: 'El usuario fue eliminado con éxito',
          });
          setTimeout(() => {
            this.router.navigate([RouteInformation.exemplarsPage])
          }, 200);
          this.deleteLoading = false;
        },
        () => {
          this.messageService.setPayload({
            type: 'warn',
            title: 'Error',
            body: 'No se pudo eliminar el usuario',
          });
          this.deleteLoading = false;
        }
      )
    );
  }

  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
    this.addLoading = true;
    this.subscription.add(
      this.catalogService
        .addOfURL(`USUARIO`, {
          id_Usuario: this.makeid(),
          nombre: this.name,
          email: this.email,
          telefono: this.telefono,
          ocupacion: this.ocupacion,
          direccion: this.direccion,
          fotografia: this.varbinaryImage,
          institucion: this.institucion,
          id_rolUsuario: this.selectedRol[0],
          contrasena: this.contrasena !== '' ? this.encrypt(this.contrasena) : ''
        })
        .subscribe(
          () => {
            this.messageService.setPayload({
              type: 'success',
              title: '¡Exito!',
              body: 'El usuario fue añadido satifactoriamente',
            });
            setTimeout(() => {
              this.router.navigate([RouteInformation.usersPage])
            }, 200);
            this.addLoading = false;
          },
          () => {
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: 'No se pudo añadir al usuario',
            });
            this.addLoading = false;
          }
        )
    );
  }

  update(): void {
    if (this.uploadedFiles !== undefined) {
      this.uploadFile();
    }
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
          fotografia: this.varbinaryImage === undefined ? btoa(this.uploadedFile[0]) : this.varbinaryImage,
          institucion: this.institucion,
          id_rolUsuario: this.selectedRol[0],
          contrasena: this.contrasena === undefined ? '' : this.encrypt(this.contrasena)
        })
        .subscribe(
          () => {
            this.messageService.setPayload({
              type: 'success',
              title: '¡Exito!',
              body: 'El usuario fue editado satifactoriamente',
            });
            setTimeout(() => {
              this.router.navigate([RouteInformation.usersPage])
            }, 200);
            this.addLoading = false;
          },
          () => {
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: 'No se pudo editar el usuario',
            });
            this.addLoading = false;
          }
        )
    );
  }

  onUpload(event: any): void {
    for (let file of event.files) {
      this.uploadedFile.push(file);
    }
  }

  onSelectFile(event: { files: File[]; }) {
    this.uploadedFiles = [...<File[]>event.files];
    this.varbinaryImage = btoa(this.uploadedFiles[0].name);
    this.selectedfiles = this.uploadedFiles;
  }

  uploadFile(): void {
    const formData = new FormData();
    
    let fileOfBlob;
    fileOfBlob = new File([this.uploadedFiles[0]], this.uploadedFiles[0].name, { type: 'application/png' });
    formData.append('file', fileOfBlob, fileOfBlob.name);
    
    this.subscription.add(
      this.catalogService.addOfURL("UploadImage", formData).subscribe(
        () =>{}
      )
    );
  }

  loadInfo(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams(`USUARIO/${this.id}`)
      .subscribe(
        (response: Usuario) => {
          if (response.id_Usuario) {
            this.isNew = false;
          }
          if (response.id_Usuario == this.user.id_Usuario || response.id_rolUsuario == this.user.id_rolUsuario || response.ROLUSUARIO.id_rolUsuario == Roles.SUPER_ADMIN) {
            this.messageService.setPayload({
              type: 'warn',
              title: 'Error',
              body: 'No puede editar a ese usuario',
            });
            this.router.navigate([RouteInformation.usersPage]);
          }
          this.name = response.nombre;
          this.email = response.email;
          this.telefono = response.telefono;
          this.ocupacion = response.ocupacion;
          this.direccion = response.direccion;          
          this.uploadedFile.push(response.fotografia);
          this.institucion = response.institucion;
          this.selectedRol.push(response.ROLUSUARIO.id_rolUsuario);          
          setTimeout(() => {
            this.loading = false;
          }, 200);
        },
        () => {
          this.loading = false;
          this.router.navigate([RouteInformation.userPage]);
        }
      )
    );
  }

  rolFilter(event: any): void {
    this.rolText = event.filter;
  }

  rolChange(event: any): void {
    this.selectedRol = [event.itemValue];
  }

  loadRoles(): void {
    this.subscription.add(
      this.catalogService
      .getByNameWithParams('ROLUSUARIO')
      .subscribe(
        (response: RolUsuario[]) => {
          this.roles = response;

          if (this.user.id_rolUsuario == Roles.ADMIN) {
            this.roles = this.roles.filter(rol =>
              rol.id_rolUsuario != Roles.SUPER_ADMIN && rol.id_rolUsuario != Roles.ADMIN
            )
          }else if (this.user.id_rolUsuario == Roles.SUPER_ADMIN) {
            this.roles = this.roles.filter(rol =>
              rol.id_rolUsuario != Roles.SUPER_ADMIN
            )
          }
          
        },
      )
    );
  }

  makeid() {
    let id = "";
    let possible = "0123456789";

    for (var i = 0; i < 8; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));

    return id;
  }

  getBreadCrumbs() {
    return [
      { label: `Usuarios ${this.user?.ROLUSUARIO.id_rolUsuario === Roles.SUPER_ADMIN ? 'y Administradores' : ''}`, routerLink: [this.routeInformation.usersPage] },
      { label: `Usuario ${this.user?.ROLUSUARIO.id_rolUsuario === Roles.SUPER_ADMIN ? 'y Administrador' : ''}`, routerLink: [this.routeInformation.userPage] },
    ];
  }

}
