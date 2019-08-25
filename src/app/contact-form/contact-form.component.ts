import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  email:string;
  subject:string;
  message:string;
  choose:boolean;

  constructor() { }
  send(){
    if(this.choose){//if user confirmed send the form
      console.log("User confirmed");
      console.log("Clicked");
      console.log(this.email);
      console.log(this.subject);
      console.log(this.message);
      alert("The form was sent")
    }else{
      console.log("User did not confirmed");
    }
    
  }
  confirmation(e){
    this.choose=e;
  }

  ngOnInit() {
  }

}
