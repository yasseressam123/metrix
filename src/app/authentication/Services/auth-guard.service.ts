import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route : Router , private authService :AuthServiceService) { }

  canActivate() {
    if(!this.authService.isAuthenticated()){
      this.route.navigate(['/authenication/login']);
      return false;
    }
    return true;

  }
}
