import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CartService } from "../cart.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  @Output() choosePage = new EventEmitter<string>();
  constructor(private cartService:CartService,private userService:UserService) {}
  count:number=this.cartService.getCount();

  openShoppingCart(){
    this.choosePage.emit("shoppingCart");
  }
  //open home page
  openHome() {
    this.choosePage.emit("home");
  }
  //open about page
  openAbout() {
    this.choosePage.emit("about");
  }
  //open categorys page
  openProducts() {
    this.choosePage.emit("categorys");
  }
  logIn(){
    this.choosePage.emit("logIn");
  }
  //change the flags of permisions and login and go to home page
  logOut(){
    this.userService.logInFlag=true;
    this.userService.isAdmin=false;
    this.choosePage.emit("home");
  }
  contactForm(){
    this.choosePage.emit("contactForm");
  }

  addProduct(){
    this.choosePage.emit("addProduct");
  }

  ngOnInit() {}
}
