import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {Question} from '../model/question.model';
import {QuizService} from '../service/quiz.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excelimport',
  templateUrl: './excelimport.component.html',
  styleUrls: ['./excelimport.component.css']
})
export class ExcelimportComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;  
  message: string="";  
  title="XlsRead"
  allQuestions!: Observable<Question[]>;  
  file: any;
  filelist:any;
  arrayBuffer:any;
  stringifiedData:any;

  constructor(private http: HttpClient, private service: QuizService) { }

  ngOnInit(): void {
  
  }
  addfile(event:any)    
  {    
  this.file= event.target.files[0];     
  let fileReader = new FileReader();    
  fileReader.readAsArrayBuffer(this.file);     
  fileReader.onload = (e) => 
  {    
      this.arrayBuffer = fileReader.result;    
      var data = new Uint8Array(this.arrayBuffer);    
      var arr = new Array();    
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
      var bstr = arr.join("");    
      var workbook = XLSX.read(bstr, {type:"binary"});    
      var first_sheet_name = workbook.SheetNames[0];    
      var worksheet = workbook.Sheets[first_sheet_name];    
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
      // this.filelist = XLSX.utils.sheet_to_json(worksheet,{raw:true});    
        // this.filelist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
            // this.filelist = [];    
            // console.log(this.filelist + "here") 
            this.http.post('http://localhost:54051/api/Excel/UploadExcel', XLSX.utils.sheet_to_json(worksheet,{raw:true})).subscribe(data=>{console.log("uploaded");})
  }
  
   alert("added successfully..!!")
  }    
}