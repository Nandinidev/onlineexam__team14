import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
readonly rootUrl="http://localhost:54051/";
  constructor(private http:HttpClient) { 

     
  }
  getFiles = () =>{
    return this.http.get(this.rootUrl+'api/DisplayFileName');
  }

  deleteFileByName = (file:any) =>{
    return this.http.post(this.rootUrl+'deleteQuestions',file)
  }
}
