import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"]
})
export class ProductDisplayComponent implements OnInit {
  @Input() product: object; //get the product to show
  @Output() back = new EventEmitter<void>(); //go back to list
  goBack() {
    this.back.emit();
  }
  constructor() {}

  ngOnInit() {}
}
