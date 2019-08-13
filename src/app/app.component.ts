import { Component } from "@angular/core";
import {trigger,state,style,transition,animate} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("menuBar", [
      state("open",
        style({
          width: "15%",
        })
      ),
      transition("open => void", animate("0.6s")), // speed, delay, ease-out/ease-in
      transition("void => *", animate("0.2s"))
    ])
  ]
})
export class AppComponent {
  showMenu: boolean = false; //flag to show menu
  pageToOpen: string; //wich page to open
  currentState: string;
  //open or close the menu
  recivedMenuClick() {
    this.showMenu = !this.showMenu;
    this.currentState = "open";
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
