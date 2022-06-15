import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { RouteInformation } from 'src/app/shared/constants/route-information';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router) {}
  canActivate() {
    return this.configNavigate();
  }

  configNavigate() {
    const user = this.authService.storagedUser as any;
    if(this.authService.isLoggedIn && user !== null) return true
    this.router.navigate([RouteInformation.loginPage]);
    return false;
  }

}