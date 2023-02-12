import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  rootApi = environment.publicUrl;

  constructor(private http : HttpClient, private router:Router) { }

  //get subordinate data
  getSubordinate(){
    return this.http.post(this.rootApi+"subordinates.php",[])
  }
}
