import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";


@Component({
  selector: "app-main-area",
  templateUrl: "./main-area.component.html",
  styleUrls: ["./main-area.component.css"],
})
export class MainAreaComponent implements OnInit {
  @Input() pageToOpen: string;
  @Output() open = new EventEmitter<string>(); //out put the pege to open for menu flag cange
  categorySelection:string;
  //get the id of a clicked category
  recivedProducts(e: string) {
    this.categorySelection=e;
    this.open.emit("products");
  }

  switchPage(e:string){
    this.open.emit("e");
  }
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
