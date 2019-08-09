import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main-area",
  templateUrl: "./main-area.component.html",
  styleUrls: ["./main-area.component.css"]
})
export class MainAreaComponent implements OnInit {
  @Input() pageToOpen: string;
  @Output() open = new EventEmitter<string>(); //out put the pege to open for menu flag cange
  products: object[];
  product: object;
  //get the products array from category list and switch to broducts list
  recivedProducts(e: object[]) {
    this.products = e;
    this.open.emit("products");
  }
  //get the clicked product
  recivedProduct(e) {
    this.product = e;
    this.open.emit("products-display");
  }
  constructor() {}

  ngOnInit() {}
}
