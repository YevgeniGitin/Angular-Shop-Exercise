import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.css"]
})
export class MenuBarComponent implements OnInit {
  @Output() choosePage = new EventEmitter<string>();
  constructor(private cartService:CartService) {}
  p:number=this.cartService.getCount();

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

  ngOnInit() {}
}
