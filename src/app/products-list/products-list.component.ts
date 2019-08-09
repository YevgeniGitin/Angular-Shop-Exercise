import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"]
})
export class ProductsListComponent implements OnInit {
  @Input() productsArray: object[]; //get the products array
  isActive: boolean = true; //flag for each page to show prodact or list
  product: object;
  //display the product
  clickOnProduct(product) {
    this.product = product;
    this.isActive = !this.isActive;
  }
  //go back to the product list
  back() {
    this.isActive = !this.isActive;
  }

  constructor() {}

  ngOnInit() {}
}
