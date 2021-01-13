import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from '../app/home-page/home-page.component';
import {Login2ndpageComponent} from '../app/login2ndpage/login2ndpage.component';
import {RegisterComponent} from '../app/register/register.component';
import { InstructionComponent } from './instruction/instruction.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';
import {AdminHomePageComponent} from '../app/admin-home-page/admin-home-page.component';
import {AdminWorkspaceComponent} from '../app/admin-workspace/admin-workspace.component';
import {ExcelimportComponent} from '../app/excelimport/excelimport.component';
import {Quiz2Component} from '../app/quiz2/quiz2.component';
import {Result2Component} from '../app/result2/result2.component';
import {ThankyouComponent} from '../app/thankyou/thankyou.component';
import {DeletequestionComponent} from '../app/deletequestion/deletequestion.component'
import { AuthGuard } from './auth/auth.guard';
import {ViewreportComponent} from '../app/viewreport/viewreport.component'
import {ViewadminComponent} from '../app/viewadmin/viewadmin.component';
import {AboutusComponent} from '../app/aboutus/aboutus.component';
const routes: Routes = [
{path:'home',component:HomePageComponent},
{path:'afterlogin',component:Login2ndpageComponent,canActivate:[AuthGuard]},
{path:'registeruser',component:RegisterComponent},
{path:'subjectclick',component:SubjectsComponent,canActivate:[AuthGuard]},
{path:'examinsts',component:InstructionComponent,canActivate:[AuthGuard]},
{path:'quizquestion',component:QuizComponent,canActivate:[AuthGuard]},
{path:'results',component:ResultComponent,canActivate:[AuthGuard]},
{path:'adminhome',component:AdminHomePageComponent},
{path:'adminspace',component:AdminWorkspaceComponent},
{path:'excelfile',component:ExcelimportComponent},
{path:'level2',component:Quiz2Component,canActivate:[AuthGuard]},
{path:'result2',component:Result2Component,canActivate:[AuthGuard]},
{path:'thanks',component:ThankyouComponent,canActivate:[AuthGuard]},
{path:'deleteques',component:DeletequestionComponent},
{path:'reports',component:ViewreportComponent},
{path:'adminreport',component:ViewadminComponent},
{path:'abouts',component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
