import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { StorageInformation } from 'src/app/shared/constants/storage-information';
import { Usuario } from 'src/app/shared/models/user';
import { CatalogService } from '../../shared/services/catalog.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  subscription: Subscription;
  constructor(
    private readonly router: Router,
    private readonly storage: LocalStorageService,
    private catalogService: CatalogService
  ) {}

  loadUser(): void {
    const user: Usuario = this.storagedUser;
    if (!user?.id_Usuario){
      return;
    }
    
    this.subscription.add(
      this.catalogService.getOneByName(`USUARIO/${user.id_Usuario}`).subscribe(
        (user: Usuario) => this.storage.store(StorageInformation.user, user)
      )
    );
  }
  
  public ngOnDestroy(): void {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }
  
  get storagedUser(): Usuario {
    return this.storage.retrieve(StorageInformation.user);
  }

  signOut() {
    this.storage.clear();
    this.router.navigate([RouteInformation.homePage]);
  }
  
}
