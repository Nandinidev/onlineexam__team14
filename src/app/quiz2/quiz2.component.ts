import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Question } from '../model/question.model';
import { QuizService } from '../service/quiz.service';
@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {
question:any;
  constructor(private router:Router,public quizService:QuizService) {
    this.question=new Question();
   }

  ngOnInit(): void {
    this.quizService.seconds=0;
    this.quizService.qnProgress=0;
    this.question.Exam_topic = this.quizService.selectedsubject
    console.log(this.quizService.selectedsubject)
    this.quizService.getQuestionsLevel2(this.question).subscribe((data:any)=>{
      this.quizService.qns=data;
    
     
      console.log(this.quizService.qns);
      
    });
  }
 
  startTimer(){
    this.quizService.timer=setInterval(()=>
      {
        this.quizService.seconds++;

      },1000);
  }

  Answer(qId:number,choice:number):any
  {
    this.quizService.qns[this.quizService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == 10) 
    {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result2']);
  }
}



}

