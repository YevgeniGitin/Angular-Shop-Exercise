import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../cart.service";
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  @Input() selectedLanguage:string;
  constructor(private cartService:CartService,private userService:UserService, private router: Router) {}
  count:number=this.cartService.getCount();

  openShoppingCart(){
    this.router.navigate(["shopping-card","shoppingCard",false]);
  }
  //change the flags of permisions and login and go to home page
  logOut(){
    this.userService.logInFlag=true;
    this.userService.isAdmin=false;
    this.router.navigate(["home"]);
  }
  ngOnInit() {
  }
}
