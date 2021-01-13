import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  selectedsubject:string="";

  readonly rootUrl='http://localhost:58321/';
  qns: any[] = [];
  seconds:number=0;
  timer: any;
  qnProgress:number=0;
  correctAnswerCount:number=0;
   //User_id:any=101;
    

  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  


  getQuestions(){
    return this.http.get(this.rootUrl+'/api/Questions');
  }

  getAnswers(body:any) {
    // var body = this.qns.map(x => x.Q_id);
    
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }

  getQuestionsLevel1(question:any){
    return this.http.post(this.rootUrl+'api/QuestionsBySubLvl1',question);
  }

  getQuestionsLevel2(question:any){
    return this.http.post(this.rootUrl+'api/QuestionsBySubLvl2',question);
  }

  submitScore(report:any) {
    
    // var body = JSON.parse(localStorage.getItem('User_id')!);
    // body.Score = this.correctAnswerCount;
    
    //body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "api/tblReports", report);
  }


}
