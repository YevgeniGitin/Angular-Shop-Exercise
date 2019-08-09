import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() menu = new EventEmitter<void>(); //out put the menu flag(open or close)
  menuflag: boolean = false;

  constructor() {}
  openmenu() {
    this.menu.emit(); //out put the menu flag(open or close)
  }

  ngOnInit() {}
}
