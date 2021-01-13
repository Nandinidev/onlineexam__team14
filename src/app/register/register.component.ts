

/*
import { Component, OnInit } from '@angular/core';
import { Registeration } from '../model/register.model';
import {registerservice} from '../service/register.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registers:Registeration;
  
  submitted=false;
  constructor(private registerservice:registerservice) {
    this.registers=new Registeration();
    
   }
  
  

  ngOnInit(): void {
    


  }
  insertuser()
  {
   this.submitted=true;
    this.registerservice.adduser(this.registers).subscribe(data=>console.log(data));
    alert("registration done successfully..!")
  
  }



} */


import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registeration } from '../model/register.model';
import {registerservice} from '../service/register.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registers:Registeration;
  
  // registerForm!: FormGroup;
  // submitted=false;
  constructor(private registerservice:registerservice,private router:Router) {
    this.registers=new Registeration();
    
   }
   

   ngOnInit() {

   }

  
    insertuser()
    {
      console.log(this.registers)

    
      this.registerservice.adduser(this.registers).subscribe(data=>console.log(data));
      alert("registration done successfully..!")
      this.router.navigate(['home'])
    
    }

   /* resetForm(form : NgForm)
    {
      form.reset();
      this.registers={
    User_id:number;
    Full_Name:'',
    Password:'',
    Email:'',
    Mobile_Number:'',
    Date_of_Birth:Date;
    City:'',
    State:'',
    Qualification:'',
    Year_of_Completion:'',
      }
    } */
  


   }
