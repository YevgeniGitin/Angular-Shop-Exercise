import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){}
  canActivate(){
    if(this.userService.logInFlag){
      this.router.navigate(["logIn"]);
    }else{
      return true; 
    }
  }
  
}
