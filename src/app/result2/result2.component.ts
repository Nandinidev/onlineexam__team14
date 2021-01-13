import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import { Router } from '@angular/router';
import { Report } from '../model/report.model';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.component.html',
  styleUrls: ['./result2.component.css']
})
export class Result2Component implements OnInit {
qnids:any;
errmsg:string="";
report:Report;
  // submitScore:any;
  constructor(public quizService: QuizService, private router: Router) {
    this.qnids=[]
    this.report=new Report()
   }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qnProgress')!) == 10) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds')!);
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress')!);
      this.quizService.qns = JSON.parse(localStorage.getItem('qns')!);
      console.log(this.quizService.qns)
      this.quizService.qns.forEach(qn => {
        this.qnids.push(qn.QnID);

      });
      console.log(this.qnids);
      this.quizService.getAnswers(this.qnids).subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
        //  console.log(data)
          this.quizService.qns.forEach((e, i) => {
            // console.log(this.quizService.correctAnswerCount)
            // console.log("e.answer= "+e.answer+"data[i]= "+data[i])
            // console.log(i)
            if (e.answer == data[i])

              this.quizService.correctAnswerCount++;
            e.correct = data[i];
          });
        }
      );
    }
    else
      this.router.navigate(['quizquestion']);
  }

   checkscore()
   {
    console.log(this.quizService.correctAnswerCount)
    localStorage.setItem('score',(this.quizService.correctAnswerCount));
     if(this.quizService.correctAnswerCount<5)

     {
      
       
       this.errmsg="Sorry,You didnt Clear level 2!!";
     }
     else
     {
       this.submitResult();
       
       this.router.navigate(["/thanks"]);  //create compo for this
     }
     
   }

   
   submitResult() {
    this.report.User_id=JSON.parse(localStorage.getItem('userId'));
    this.report.ExamTopic =localStorage.getItem('examtopic');
    this.report.Score = JSON.parse(localStorage.getItem('score'));
    console.log(this.report)
    // console.log(this.report.score)
     console.log(typeof localStorage.getItem('examtopic'))
     console.log(typeof localStorage.getItem('UserId'))
     console.log(typeof localStorage.getItem('score'))
    this.quizService.submitScore(this.report).subscribe((data) => {
      console.log(data);
      
      // this.restart();
    });
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quizquestion']);
  }
  LogOut()
  {
 this.router.navigateByUrl("/home");
 localStorage.clear(); 
  }

}
