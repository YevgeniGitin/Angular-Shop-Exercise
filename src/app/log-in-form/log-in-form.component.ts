import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { UserService } from "../user.service";
import { User } from 'src/modules/user';
import { Router } from '@angular/router';

@Component({
  selector: "app-log-in-form",
  templateUrl: "./log-in-form.component.html",
  styleUrls: ["./log-in-form.component.css"]
})
export class LogInFormComponent implements OnInit {
  userName:string;
  password:string;

  constructor(private userService:UserService,private router: Router) { }

  onSubmit(){
    let user:User=this.userService.loadUserByUserName(this.userName);
    if(user===undefined){//check if the user name is true
      alert("no such user name");
    }else if(user.password!==this.password){ //check the password
      alert("Password is incorrect");
    }else{//corect data change status of log in and save the loged in user
      this.userService.logInFlag=false;
      this.userService.connectUser=user;
      if(this.userService.connectUser.permission==="admin"){//check if the user is admin if yes give permission 
        this.userService.isAdmin=true;
      }else{
        this.userService.isAdmin=false;
      }
      this.router.navigate(["home"]);
    }
  }

  ngOnInit() {
  }

}
