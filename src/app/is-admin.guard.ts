import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements  CanActivate {
  constructor(private userService:UserService,private router:Router){}
  canActivate(){
    if(this.userService.isAdmin){
      return true;
    }else{
      this.router.navigate(["logIn"]);
      this.userService.logInFlag=true;
      this.userService.isAdmin=false;
      localStorage.removeItem('user');
      localStorage.removeItem('logInFlag');
      localStorage.removeItem('userIndex');
      localStorage.removeItem('isAdmin');
    }
  }
  
}
