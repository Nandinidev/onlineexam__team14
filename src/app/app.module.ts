import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Login2ndpageComponent } from './login2ndpage/login2ndpage.component';
import { RegisterComponent } from './register/register.component';
import {registerservice} from './service/register.service';
import {HttpClientModule} from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { QuizService } from './service/quiz.service';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { ExcelimportComponent } from './excelimport/excelimport.component';
import { AdminWorkspaceComponent } from './admin-workspace/admin-workspace.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Result2Component } from './result2/result2.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { DeletequestionComponent } from './deletequestion/deletequestion.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginService } from './service/login.service';
import { ViewreportComponent } from './viewreport/viewreport.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Login2ndpageComponent,
    RegisterComponent,
    SubjectsComponent,
    InstructionComponent,
    QuizComponent,
    ResultComponent,
    AdminHomePageComponent,
    ExcelimportComponent,
    AdminWorkspaceComponent,
    Quiz2Component,
    Result2Component,
    ThankyouComponent,
    DeletequestionComponent,
    ViewreportComponent,
    ViewadminComponent,
    AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [registerservice,QuizService,AuthGuard,LoginService,ViewadminComponent,ViewreportComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
