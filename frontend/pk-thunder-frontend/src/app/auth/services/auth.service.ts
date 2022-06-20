import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { StorageInformation } from 'src/app/shared/constants/storage-information';
import { CatalogService } from 'src/app/shared/services/catalog.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private readonly router: Router,
    private readonly catalogService: CatalogService,
    private readonly storage: LocalStorageService,
  ) {}
  
  get isLoggedIn(): boolean {
    const user = this.storage.retrieve(StorageInformation.user);
    return user !== null;
  }

  get storagedUser(): any {
    return this.storage.retrieve(StorageInformation.user);
  }
  
  login(email: string, password: string) {
    /* TODO: Login*/
  }

  signOut() {
    this.storage.clear();
    this.router.navigate([RouteInformation.homePage]);
  }
  
}
