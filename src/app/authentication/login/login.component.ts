import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin:any;
  errorMessage:any;
  userData:any;

   // Declare Sign In Form
   signInForm = new FormGroup({
    'email'        : new FormControl("",Validators.required),
    'password'     : new FormControl("", Validators.required)
   });

  constructor(private auth : AuthServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  signIn(signInForm:any){
    console.log("signInForm",signInForm.value)
    this.invalidLogin = false;
    var formData: any = new FormData();
    formData.append('email', signInForm.get('email').value);
    formData.append('password', signInForm.get('password').value);

    if(this.signInForm.status == "VALID"){
    this.auth.signIn(formData)
    //Having Response
    .subscribe((response:any)=>{
      console.log("res",response)
       if(response.message == "Please Enter Email and Password "){
        this.invalidLogin = true;
        this.errorMessage = "Please Enter Correct Email and Password"
      }else{
        this.invalidLogin = false;
        localStorage.setItem("userId" , response.data.userID);
        this.auth.setToken(response.data.accessToken);
        // this.auth.tokenExpire = response.data.expireDate;
        this.router.navigate(['pages']);
      }
      
      //Handling Error
    }
    ,(error:any)=>{
      this.invalidLogin = true;
      if(error.error.error == "Email Or Password InValid!"){
        this.errorMessage = "خطأ في اسم المستخدم او كلمة المرور"
      }
      else{
        this.errorMessage=error.error.error
      }
    }
    );

    }
  }

}
