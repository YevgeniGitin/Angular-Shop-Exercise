import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../products/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cart:Observable<Product[]>;
  
  constructor(private userService: UserService, private dataService:DataService ) {
    this.cart=this.userService.user.pipe(
      map(u=>{
        if(u===null){
          return [];
        }else{
          return u.productsInCard;
        }
      })
    );
  }
  //add product to the card
  addProduct(id:string) {
    let product=this.dataService.getProductByid(id);
    this.userService.users[this.userService.userIndex].productsInCard.push(product);
    this.userService.updateUser();
  }
  //remove item by index
  removeFromCard(id:string) {
    let product=this.dataService.getProductByid(id);
    let index = this.userService.users[this.userService.userIndex].productsInCard.indexOf(product);
    //if there is no such iten do nothing
    if (index !== -1) {
      this.userService.users[this.userService.userIndex].productsInCard.splice(index,1);
      this.userService.updateUser();
    }
  }

  getProductFromCart(id:string):Observable<Product>{
    return this.cart.pipe(
      map(productsInCart=>productsInCart.find(p=>p.productId===id))
    );
  }
  //get the number of items in thecard for the menu
  getCount():Observable<number> {
    return this.cart.pipe(
      map(c=>{
        if (this.userService.userIndex === undefined) {
            return 0;
          } else {
            return c.length;
          }
      })
    );
  }
}
