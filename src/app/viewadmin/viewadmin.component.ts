import { Component, OnInit } from '@angular/core';
import {registerservice} from '../service/register.service'
import {QuizService} from '../service/quiz.service'
import { Report } from '../model/report.model';
import {Router} from '@angular/router';
import {ViewadminService} from '../service/viewadmin.service';
@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {
  reports: any;
  selectedExamTopic: string = "";
  selectedCity: string= "";
  constructor(private router:Router,private viewadminservice:ViewadminService) {
    
   }

  ngOnInit(): void {
  }
  searchreports(){
    console.log(this.selectedExamTopic);
    console.log(this.selectedCity);

    this.viewadminservice.searchreports(this.selectedExamTopic,this.selectedCity).subscribe(
      data=>{
        if(data) {
          this.reports = data;
          console.log(this.reports);
        } 
        console.log(data);
      },
      err=>{
        console.log(err);
      }
  )}
  


}
