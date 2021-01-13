import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewadminService {
url="http://localhost:54051/api/"
  
  

  constructor(private httpClient:HttpClient) { }

  public searchreports( ExamTopic:string , City:string){
    let params = new HttpParams();
   params = params.append('ExamTopic', ExamTopic);
   params = params.append('City', City);
    return this.httpClient.get(this.url+"/tblUsers", {params:params});
  }

}