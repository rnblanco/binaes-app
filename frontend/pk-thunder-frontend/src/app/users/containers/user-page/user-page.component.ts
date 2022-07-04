import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../shared/components/base.component';
import { ActivatedRoute, Params } from '@angular/router';
import { RouteInformation } from '../../../shared/constants/route-information';
import { Usuario } from '../../../shared/models/user';
import { Roles } from '../../../auth/constants/roles';
import { Validators } from '@angular/forms';
import { DetailPage, PageComponent } from '../../../shared/models/component-interfaces';
import { UserRolesSelectComponent } from '../../component/user-roles-select.component';
import { UploadFileComponent } from '../../../shared/components/upload-file.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent extends BaseComponent implements OnInit, PageComponent, DetailPage {

  isNew: boolean = true;
  id: string;
  name: string;
  email: string;
  telefono: string;
  ocupacion: string;
  direccion: string;
  institucion: string;
  contrasena: string;

  SUPER_ADMIN = Roles.SUPER_ADMIN;
  
  addLoading = false;
  deleteLoading = false;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    public userRolesSelect: UserRolesSelectComponent,
    public uploadFile: UploadFileComponent
  ) {
    super();
  }

  get formIsValid(): boolean {
    return this.form.valid && this.name !== '' && this.email !== '' && this.telefono !== '' && this.ocupacion !== '' && this.institucion !== '' && this.direccion !== '' && this.userRolesSelect.selectedRol?.length > 0 && (this.uploadFile.uploadedFiles != undefined || this.uploadFile.uploadedFile.length > 0);
  }

  ngOnInit(): void {
    this.loadAll();
    this.user = this.authService.storagedUser;
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

  loadAll(): void {
    this.subscription.add(
      this.route.params.subscribe(({ id }: Params) => {        
        this.loading = true;
        this.userRolesSelect.loadRoles();
        if (id) {
          this.id = id;
          this.loadInfo();
        } else {
          this.buildForm();
          this.loading = false;
        }
      })
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
          this.institucion = response.institucion;
          this.uploadFile.uploadedFile.push(response.fotografia);
          this.userRolesSelect.selectedRol.push(response.ROLUSUARIO.id_rolUsuario);
          this.buildForm();
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

  add(): void {
    if (!this.isNew) {
      this.update();
      return;
    }
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
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
          fotografia: this.uploadFile.varbinaryImage,
          institucion: this.institucion,
          id_rolUsuario: this.userRolesSelect.selectedRol[0],
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
    if (this.uploadFile.uploadedFiles !== undefined) {
      this.uploadFile.uploadFile();
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
          fotografia: this.uploadFile.varbinaryImage === undefined ? btoa(this.uploadFile.uploadedFile[0]) : this.uploadFile.varbinaryImage,
          institucion: this.institucion,
          id_rolUsuario: this.userRolesSelect.selectedRol[0],
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
