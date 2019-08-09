import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showMenu: boolean = false; //flag to show menu
  pageToOpen: string; //wich page to open
  //open or close the menu
  recivedMenuClick() {
    this.showMenu = !this.showMenu;
  }
  //flag to main area to open the page
  switchPage(e) {
    this.pageToOpen = e;
    this.showMenu = false; //close the menu after choose the page
  }
  closeMenu() {
    this.showMenu = false;
  }
}
