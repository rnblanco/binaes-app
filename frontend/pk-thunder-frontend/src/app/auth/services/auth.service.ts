import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { StorageInformation } from 'src/app/shared/constants/storage-information';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import firebase from 'firebase/app';
import { GlobalMessageService } from './global-message.service';
import { FirebaseES } from '../constants/firebase';
import { AllowConfig } from 'src/app/shared/models/allow-config.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: Observable<any>;

  constructor(
    private readonly angularFireAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly catalogService: CatalogService,
    private readonly storage: LocalStorageService,
    private readonly globalMessageService: GlobalMessageService
  ) {
    this.userData = angularFireAuth.authState;
  }

  /* Get user token */
  getUserIdToken(): Observable<any> {
    return this.angularFireAuth.idToken;
  }

  get isLoggedIn(): boolean {
    const user = this.storage.retrieve(StorageInformation.user);
    return user !== null;
  }

  get storagedUser(): any {
    return this.storage.retrieve(StorageInformation.user);
  }

  /* Sign up */
  signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const fsubs = this.angularFireAuth.idTokenResult.subscribe(
          (_fuser) => {
            this.checkIPeopleUser();
            fsubs.unsubscribe();
          },
          (error) => {
            fsubs.unsubscribe();
          }
        );
      })
      .catch((error) => {
        this.globalMessageService.setPayload({
          type: 'error',
          title: 'Error',
          body: FirebaseES[error.code] || error.code,
        });
      });
  }

  /* Sign in */
  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const fsubs = this.angularFireAuth.idTokenResult.subscribe(
          () => {
            this.checkIPeopleUser();
            fsubs.unsubscribe();
          },
          () => {
            fsubs.unsubscribe();
          }
        );
      })
      .catch((error) => {
        this.globalMessageService.setPayload({
          type: 'error',
          title: 'Error',
          body: FirebaseES[error.code] || error.code,
        });
        this.router.navigate([RouteInformation.loginPage]);
      });
  }

  checkIPeopleUser(noRedirect?) {
    const userinfoSubs = this.catalogService
      .getAllByName('user/info')
      .subscribe((_user: any) => {
        this.storage.store(StorageInformation.user, _user.data);
        userinfoSubs.unsubscribe();
        if (!noRedirect) {
          if (_user.data.isNew) {
            this.router.navigate([RouteInformation.registerPage]);
          } else {
            this.router.navigate([RouteInformation.dashboardPage]);
          }
        }
      });
  }

  checkOrganization(organization: string, superUser?) {
    const user = this.storage.retrieve(StorageInformation.user);
    const rol = user.rol as any[];
    const organizations = user.userPlaces
      .map((_item) =>
        _item.organization && _item.organization !== null
          ? _item.organization.name
          : undefined
      )
      .filter((_item) => _item) as any[];
    return superUser
      ? rol.includes('SYSTEM') || organizations.includes(organization)
      : organizations.includes(organization);
  }

  // Sign in with Google
  signInGoogle() {
    return this.signInSocialNetworks(new firebase.auth.GoogleAuthProvider());
  }

  // Sign in with Apple
  signInApple() {
    return this.signInSocialNetworks(
      new firebase.auth.OAuthProvider('apple.com')
    );
  }

  // Auth logic to run auth providers
  signInSocialNetworks(provider) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        const fsubs = this.angularFireAuth.idTokenResult.subscribe(
          (_fuser) => {
            const userinfoSubs = this.catalogService
              .getAllByName('user/info')
              .subscribe((_user: any) => {
                this.storage.store(StorageInformation.user, _user.data);
                userinfoSubs.unsubscribe();
                this.router.navigate([RouteInformation.dashboardPage]);
              });
            fsubs.unsubscribe();
          },
          (error) => {
            fsubs.unsubscribe();
          }
        );
      })
      .catch((error) => {
        this.globalMessageService.setPayload({
          type: 'error',
          title: 'Error',
          body: FirebaseES[error.code] || error.code,
        });
      });
  }

  /* Verify oob code */
  verifyOobCode(code: string) {
    return this.angularFireAuth.checkActionCode(code);
  }

  resetPassword(code: string, password: string) {
    return this.angularFireAuth.confirmPasswordReset(code, password);
  }

  sendPasswordResetEmail(email: string) {
    return this.angularFireAuth.sendPasswordResetEmail(email, {
      url: environment.api_url.replace(/api/gi, '') + 'auth',
    });
  }

  /* Sign out */
  signOut() {
    this.angularFireAuth.signOut().then(() => {
      this.storage.clear();
      this.router.navigate([RouteInformation.homePage]);
    });
  }

  /* Check user permission */
  isAllowed(config: AllowConfig) {
    const _user = this.storage.retrieve(StorageInformation.user);
    if (!_user) return false;
    return _user.permissions.indexOf(config.permission) !== -1;
  }
}
