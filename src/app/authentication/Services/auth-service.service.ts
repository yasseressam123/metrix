import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authApi = environment.publicUrl;
  tokenExpire:any;

  constructor(private http : HttpClient, private router:Router, public jwtHelper:JwtHelperService) { }

  signIn(userData:any){
    return this.http.post(this.authApi+"login.php",userData)
  }

  //--------------------------------------------------------
  //Dealing With Tokens;

  getToken() {
    return localStorage.getItem("token");
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if(token){
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  handleError(error:any){
    return throwError(error);
  }

}
