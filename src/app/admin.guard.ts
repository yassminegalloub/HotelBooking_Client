import { AuthService } from './_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor (private authService: AuthService,
    private router : Router) {} 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authService.currentUserValue;
     
          
          if (route.data.roles && route.data.roles.indexOf(currentUser.roles) == -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['forbidden']);
              return false;
          }

 
          return true;
    
  }
  
}
