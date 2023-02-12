import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/authentication/Services/auth-service.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{

  constructor(private router:Router, private authService: AuthServiceService){}

  ngOnInit(): void {
      setTimeout(()=>{
        if(!this.authService.isAuthenticated()){
          this.router.navigate(['/authentication/login']);
        }else{
          this.router.navigate(['pages']);
        }
      })
  }
}
