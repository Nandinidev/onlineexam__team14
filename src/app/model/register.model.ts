import { UrlSerializer } from "@angular/router";
export class Registeration{
    User_id:any;
    Full_Name:string;
    Password:string;
    Email:string;
    Mobile_Number:string;
    Date_of_Birth:Date;
    City:string;
    State:string;
    Qualification:string;
    Year_of_Completion:string;

    constructor(Full_Name:string="",Password:string="",Email:string="", Mobile_Number:string="", Date_of_Birth:Date=new Date("Sat Dec 09 2020 08:12:55"),
    City:string="",State:string="",Qualification:string="",Year_of_Completion:string="")
    {
        
        this.Full_Name=Full_Name;
        this.Password=Password;
        this.Email=Email;
        this.Mobile_Number=Mobile_Number;
        this.Date_of_Birth=Date_of_Birth;
        this.City=City;
        this.State=State;
        this.Qualification=Qualification;
        this.Year_of_Completion=Year_of_Completion;
        
    }

}