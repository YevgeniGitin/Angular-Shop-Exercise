import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "src/app/core/models/user";

@Injectable({
  providedIn: "root"
})
export class IsAdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
//check if admin
  async canActivate() {
    if(localStorage.getItem('id')!==null){//firs check if loged in
      try {
        const users: User[] = await this.userService.getUserPromise();//get the users data by http request
        const user: User= this.findUserById(users,localStorage.getItem('id'));
        if ( user.permission === "admin") {//check if admin
          return true;
        } else {//if not admin log out the loged in user
          this.userService.logout();
          this.router.navigate(["/logIn"]);
        }
      } catch (error) {
        console.log(error);
      }
    }else{//if not loged in return false
      this.router.navigate(["/logIn"]);
    }
  }

  findUserById(users:User[],id:string):User{
    return users.find(u=> u.id===id);
  }
}
