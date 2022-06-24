import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { RouteInformation } from 'src/app/shared/constants/route-information';

@Injectable({
  providedIn: 'root'
})

export class PrevAuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url === RouteInformation.unauthorizedPage) {
      return true;
    }
    
    const user = this.authService.storagedUser;
    
    if (user !== null) {
      this.router.navigate([RouteInformation.dashboardPage]);
      return false;
    }
    
    if (state.url !== RouteInformation.loginPage) this.router.navigate([RouteInformation.loginPage]);
    return true;
  }
  
}