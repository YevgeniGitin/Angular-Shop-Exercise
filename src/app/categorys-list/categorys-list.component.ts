import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import productsCategory from "../../assets/data/ProductCategory.json";
import{ trigger , state , style , animate , transition } from '@angular/animations';
import{Category} from "../../modules/category";
import {Product} from"../../modules/product";



@Component({
  selector: "app-categorys-list",
  templateUrl: "./categorys-list.component.html",
  styleUrls: ["./categorys-list.component.css"],
  animations:[trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate('1s')),
  ])]
})
export class CategorysListComponent implements OnInit {
  @Output() products = new EventEmitter<Product[]>(); //out put the products

  data: Category[];
  constructor() {}
  //get category's products
  getCategorysProducts(category: Category) {
    this.products.emit(category.productarr);
  }
  //get all products
  getAllProducts() {
    let products: Product[] = new Array();
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].productarr.length; j++)
        products.push(this.data[i].productarr[j]);
    }
    this.products.emit(products);
  }

  ngOnInit() {
    this.data = productsCategory;
  }
}
