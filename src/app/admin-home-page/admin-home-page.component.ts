import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  username:string=""
  password:string=""
  errmsg:string=""
  constructor(private router:Router) {}
    
  ngOnInit(): void {
  }
  Validate()
  {
    console.log(this.username)
    console.log(this.password)
    if(this.username.toLocaleLowerCase()=="admin" && this.password=="1234")
    {
      this.router.navigate(["/adminspace"]);
    }
    else
    {
      this.errmsg="Invalid Credentials";
      console.log(this.errmsg);
      
    }

  }


}
