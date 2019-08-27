import { Component, OnInit } from "@angular/core";
import { trigger, state, style, animate, transition} from "@angular/animations";
import { Product } from "../../modules/product";
import { CartService } from "../cart.service";
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import{ Location } from '@angular/common';
import { UserService } from '../user.service';

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
  product: Product; //get the product to show
  action:boolean=(this.route.snapshot.paramMap.get("action")==="true");

  constructor(private cartService:CartService,private userService:UserService,private route: ActivatedRoute, private dataService:DataService, private location : Location ) {}

  addItem(product:Product){
    this.cartService.addProduct(product);
    alert("The product added to the card");
  }

  removeItem(product){
    this.cartService.removeFromCard(product);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
  
  ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id");
    this.product=this.dataService.getProductByid(id);
  }
}