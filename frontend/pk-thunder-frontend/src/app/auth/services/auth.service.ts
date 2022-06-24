import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { StorageInformation } from 'src/app/shared/constants/storage-information';
import { Usuario } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private readonly router: Router,
    private readonly storage: LocalStorageService,
  ) {}

  get storagedUser(): Usuario {
    return this.storage.retrieve(StorageInformation.user);
  }

  signOut() {
    this.storage.clear();
    this.router.navigate([RouteInformation.homePage]);
  }
  
}
