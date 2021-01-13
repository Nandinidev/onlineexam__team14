import { Component, OnInit } from '@angular/core';

import { AuthGuard } from '../auth/auth.guard'
import {LoginService} from '../service/login.service';
import { user } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userlogin:user;
  user:user;
  msg:string="";
  u:any;
  

  constructor(private LoginService:LoginService,private router:Router) { 
    this.user = new user();
    this.userlogin=new user();
  }

  ngOnInit(): void {
  }
  
  login()
  {
   
    this.LoginService.logincheckusingapi(this.user).subscribe(
      data=>
      {this.u=data,console.log(this.u)
      
          localStorage.clear();
          localStorage.setItem('participant',JSON.stringify(data));
          localStorage.setItem('userId',(data.User_id));
          localStorage.setItem('email',(data.Email));
          
          console.log(this.user.Email)
          this.LoginService.email = this.user.Email;
          this.router.navigate(['afterlogin'])


        
       
      },
      err=> alert("Invalid password or Email..!"))
      //alert("Login Successful...;)")
   

}
}
