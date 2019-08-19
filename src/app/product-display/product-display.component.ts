import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, state, style, animate, transition} from "@angular/animations";
import { Product } from "../../modules/product";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.css"],
  animations: [
    trigger("fadeInOut", [
      state("void",style({ opacity: 0 })),
      transition("void <=> *", animate("1s"))
    ])
  ]
})
export class ProductDisplayComponent implements OnInit {
  @Input() product: Product; //get the product to show
  @Input() action:boolean;
  @Output() back = new EventEmitter<void>(); //go back to list

  constructor(private cartService:CartService) {}

  addItem(product:Product){
    this.cartService.addProduct(product);
    alert("The product added to the card");
  }

  removeItem(product){
    this.cartService.removeFromCard(product);
    this.back.emit();
  }

  goBack() {
    this.back.emit();
  }


  ngOnInit() {}
}
