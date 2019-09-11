import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  
  canActivate() {
    if (localStorage.getItem('id')===null) {
      this.router.navigate(['logIn']);
    } else {
      return true;
    }
  }
}
