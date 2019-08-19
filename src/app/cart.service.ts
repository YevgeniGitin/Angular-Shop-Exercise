import { Injectable } from "@angular/core";
import { Product } from "../modules/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCard=new Array<Product>();
  //add product to the card
  addProduct(product:Product){
    this.productsInCard.push(product);
  }
  //remove item by index
  removeFromCard(product:Product){
    let index=this.productsInCard.indexOf(product)
    //if there is no such iten do nothing
    if(index!==-1){
      this.productsInCard.splice(index, 1);
    }
  }
  //get the items in the card arra
  loadcard():Product[]{
    return this.productsInCard;
  }
  //get the number of items in thecard for the menu
  getCount():number{
    return this.productsInCard.length;
  }

  constructor() { }
}
