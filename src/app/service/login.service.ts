

import {Injectable} from '@angular/core';
import {Registeration } from '../model/register.model';
import {HttpClient} from '@angular/common/http';

import { user } from '../model/user.model'

@Injectable(
  {providedIn:'root'}
)
export class LoginService{
  
email:any;
  constructor(private httpClient:HttpClient,private puthttp:HttpClient){
  }
  
     logincheckusingapi(user:user){

      return this.httpClient.post("http://localhost:58321//api/tblUserLogins/Login",user);
  }


}
