import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { UserService } from "../user.service";
import { User } from 'src/modules/user';

@Component({
  selector: "app-log-in-form",
  templateUrl: "./log-in-form.component.html",
  styleUrls: ["./log-in-form.component.css"]
})
export class LogInFormComponent implements OnInit {
  @Output() open = new EventEmitter<string>();
  userName:string;
  password:string;

  constructor(private userService:UserService) { }

  onSubmit(){
    let user:User=this.userService.loadUserByUserName(this.userName);
    if(user===undefined){
      alert("no such user name");
    }else if(user.password!==this.password){
      alert("Password is incorrect");
    }else{
      this.userService.logInFlag=false;
      this.userService.connectUser=user;
      this.open.emit("home");
    }
  }

  ngOnInit() {
  }

}
