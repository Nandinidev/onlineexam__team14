import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import {DeleteService} from '../delete.service';
import { File } from '../model/file';

@Component({
  selector: 'app-deletequestion',
  templateUrl: './deletequestion.component.html',
  styleUrls: ['./deletequestion.component.css']
})
export class DeletequestionComponent implements OnInit {
  files: any;
  file: File;

  constructor(private qs:DeleteService) { 
    this.file = new File();
    this.qs.getFiles().subscribe(data=>{
      console.log(data);
      
      this.files = data;
    })
  }

  deleteFile(file_name:any){
    this.file.file_name = file_name;
    this.qs.deleteFileByName(this.file).subscribe(data=>{console.log(data);
    })
    alert("deleted successfully")
  }
  ngOnInit(): void {
  }

}
