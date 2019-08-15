import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition} from "@angular/animations";
import { Product } from "../../modules/product";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void <=> *", animate("1s"))
    ])
  ]
})
export class ProductDisplayComponent implements OnInit {
  @Input() product: Product; //get the product to show
  @Output() back = new EventEmitter<void>(); //go back to list
  goBack() {
    this.back.emit();
  }
  constructor() {}

  ngOnInit() {}
}
