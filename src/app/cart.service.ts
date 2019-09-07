import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //add product to the card
  addProduct(product: Product) {
    this.userService.users[this.userService.userIndex].productsInCard.push(product);
  }
  //remove item by index
  removeFromCard(product: Product) {
    let index = this.userService.users[this.userService.userIndex].productsInCard.indexOf(product);
    //if there is no such iten do nothing
    if (index !== -1) {
      this.userService.users[this.userService.userIndex].productsInCard.splice(index,1);
    }
  }
  //get the items in the card arra
  loadcard(): Product[] {
    return this.userService.users[this.userService.userIndex].productsInCard;
  }
  //get the number of items in thecard for the menu
  getCount(): number {
    if (this.userService.userIndex === undefined) {
      return 0;
    } else {
      return this.userService.users[this.userService.userIndex].productsInCard.length;
    }
  }

  constructor(private userService: UserService) {}
}
