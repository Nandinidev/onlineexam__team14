import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
qnids:any;
errmsg:string="";
  // submitScore:any;
  constructor(public quizService: QuizService, private router: Router) {
    this.qnids=[]
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
     if(this.quizService.correctAnswerCount<5)
     {
       this.errmsg="Sorry,You didnt pass the minimum score.Better luck next time";
     }
     else
     {
       this.router.navigate(["/level2"]);  //create compo for this
     }
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
