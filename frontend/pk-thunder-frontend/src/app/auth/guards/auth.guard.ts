import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouteInformation } from 'src/app/shared/constants/route-information';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  user: Usuario;
  
  constructor(
    public router: Router,
    private readonly authService: AuthService) {
  }
  
  canActivate() {
    return this.configNavigate();
  }
  
  canActivateChild(route: ActivatedRouteSnapshot) {
    this.user = this.authService.storagedUser;
    if (this.user === null){
      this.router.navigate([RouteInformation.loginPage]);
      return false;
    }
    
    const isAllowed = route.data?.permission.includes(this.user?.ROLUSUARIO.id_rolUsuario) ?? false;
    if (!isAllowed){
      this.router.navigate([RouteInformation.dashboardPage]);
      return false;
    }
    
    return true;
  }

  configNavigate() {
    this.user = this.authService.storagedUser;
    
    if (this.user === null) {
      this.router.navigate([RouteInformation.loginPage]);
      return false;
    }
    
    return true;
  }

}