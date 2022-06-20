import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { Roles } from '../constants/roles';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  user: any;
  
  constructor(
    public router: Router,
    private readonly authService: AuthService) {
  }
  
  canActivate() {
    return this.configNavigate();
  }
  
  canActivateChild(route: ActivatedRouteSnapshot) {
    this.user = this.authService.storagedUser as any;
    const permission = route.data?.['permission'].contains(Roles[this.user?.rol]);
    if (permission && this.authService.isLoggedIn) return true
    this.router.navigate([RouteInformation.loginPage]);
    return false;
  }

  configNavigate() {
    this.user = this.authService.storagedUser as any;
    if (this.authService.isLoggedIn && this.user !== null) return true
    this.router.navigate([RouteInformation.loginPage]);
    return false;
  }

}