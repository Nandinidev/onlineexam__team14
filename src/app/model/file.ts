export class File{
    file_id:number=0;
    file_name:string="";
    Exam_topic:string="";
    constructor(file_id:number=0,file_name:string="",Exam_topic:string=""){
        this.file_id = file_id;
        this.file_name = file_name;
        this.Exam_topic = Exam_topic;
    }

}