import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { mainModule } from 'process';
import {Registeration} from '../model/register.model';
import { Report } from '../model/report.model';


@Injectable()
export class registerservice{
    readonly rootUrl='http://localhost:58321/';
   
    
    constructor(private getHttp:HttpClient,private puthttp:HttpClient,private http:HttpClient)
    {
              
    }
    
    // public viewmyreport(email:any)
    // {
    //      return this.getHttp.get("http://localhost:58321/api/tblUsers/"+email);
    // }
  
   public viewmyreport(email:any){
       console.log(email)
        return this.http.get(this.rootUrl+'api/tblUsers/?email='+email);
        
   }
    
  

    public adduser(registers:Registeration)
    {
        return this.getHttp.post("http://localhost:58321/api/tblUsers/Login",registers);
    }
}