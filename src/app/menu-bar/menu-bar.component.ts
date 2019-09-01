<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { CartService } from "../cart.service";
import { UserService } from "../user.service";
=======
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
>>>>>>> AngularShopRoutingExercise
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
<<<<<<< HEAD
  @Input() selectedLanguage:string;
  @Output() choosePage = new EventEmitter<string>();
  constructor(private cartService:CartService,private userService:UserService,private localizationService:LocalizationService) {}
=======
  constructor(private cartService:CartService,private userService:UserService, private router: Router,private localizationService:LocalizationService) {}
>>>>>>> AngularShopRoutingExercise
  count:number=this.cartService.getCount();

  logOut(){
    this.userService.logInFlag=true;
    this.userService.isAdmin=false;
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }
}
