import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2ndpage',
  templateUrl: './login2ndpage.component.html',
  styleUrls: ['./login2ndpage.component.css']
})
export class Login2ndpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  LogOut()
  {
 this.router.navigateByUrl("/home");
 localStorage.clear(); 
  }
}
