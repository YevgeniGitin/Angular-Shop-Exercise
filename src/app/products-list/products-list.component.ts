import { Component, OnInit } from "@angular/core";
import{ trigger , state , style , animate , transition } from "@angular/animations";
import {Product} from "../../modules/product";
import { DataService } from "../data.service";
import { CartService } from "../cart.service";
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
  animations:[trigger("fadeInOut", [
    state("void", style({opacity: 0})),
    transition("void => *", animate("1s")),
  ])]
})
export class ProductsListComponent implements OnInit {
  constructor(private dataService: DataService,private cartService:CartService, private userService:UserService, private route: ActivatedRoute, private router: Router) {}
  action:boolean=(this.route.snapshot.paramMap.get("action")==="true"); //what action to allow add or remove
  productsArray: Product[];//products array
  //display the product
  clickOnProduct(product:Product) {
    this.router.navigate(["product-details",product.ProductId,this.action]);
  }
  // click on edit button and sweech the flag and send the selected product
  editProduct(product:Product){
    this.router.navigate(["edit-product",product.ProductId]);
   }
  //get selected list of products
  ngOnInit() {
    const selectedCategory:string = this.route.snapshot.paramMap.get("selectedCategory");
    if(selectedCategory==="allProducts"){
      this.productsArray=this.dataService.loadAllProducts();
    }else if(selectedCategory==="shoppingCard"){//if it is shoping card list
            this.productsArray=this.cartService.loadcard();
    }else{
        this.productsArray=this.dataService.loadCategoryProdacts(selectedCategory);
    }
  }
}
