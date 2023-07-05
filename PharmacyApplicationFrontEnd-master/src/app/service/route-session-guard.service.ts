import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthenticateUserService } from './authenticate-user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteSessionGuardService implements CanActivate {

  constructor(private authenticatedService: AuthenticationService,
    private authenticateUserService : AuthenticateUserService,
    private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticatedService.isAdminSessionLive()) {
      return true;
    } else if(this.authenticateUserService.isUserSessionLive()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }

}
