import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
//  quizService: any;

  constructor(private qs:QuizService) { 
    
  }

  ngOnInit(): void {
  }


  selectsub(subject:any)
  {
    this.qs.selectedsubject=subject.value
    console.log(subject.value)
    localStorage.setItem('examtopic',(this.qs.selectedsubject.toString()));
  }
}

