import { Component, OnInit } from '@angular/core';
import { Report } from '../model/report.model';
import {registerservice} from '../service/register.service';
import {Registeration} from '../model/register.model';
import { user } from '../model/user.model';
import { LoginService } from '../service/login.service';
user:user;
 @Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {
 report:any;
 reg:Registeration;
 msg:any
 user:user;
  constructor(private registerservice:registerservice,private loginService: LoginService) {
    
    this.reg=new Registeration()
    this.user = new user();
    
    
    
   }
   
  viewmyreport()
  {
    localStorage.getItem('email');
    console.log(localStorage.getItem('email'))
    console.log(this.loginService.email)
    this.registerservice.viewmyreport(this.loginService.email).subscribe(msg=>{this.report = msg})

   // this.registerservice.viewmyreport(this.report.User_id).subscribe(msg=>console.log("called"));
    //this.reg.Email =JSON.parse(localStorage.getItem('email'));
   // this.report.Score = JSON.parse(localStorage.getItem('score'));
   // console.log(this.report)
  //  this.registerservice.viewmyreport()
  }
  ngOnInit(): void {
   

  }


}
