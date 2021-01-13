import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-workspace',
  templateUrl: './admin-workspace.component.html',
  styleUrls: ['./admin-workspace.component.css']
})
export class AdminWorkspaceComponent implements OnInit {

  constructor(private router:Router,private active:ActivatedRoute) {
    
  }



  ngOnInit(): void {
  }
  LogOut()
  {
this.router.navigateByUrl("/adminhome");
//localStorage.clear(); //cleare all storage values
  }

}
